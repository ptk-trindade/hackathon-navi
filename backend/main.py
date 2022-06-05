from flask import Flask, request
import pandas as pd
# import json

import functions as fn

app = Flask(__name__)


# USERS
@app.route('/user/<user_id>', methods=["GET"])
def get_user(user_id):
    
    df = pd.read_csv("database/usuarios.csv")
    
    filter = df["id"] == int(user_id)
    df = df.where(filter)
    
    print(df)
    return {"success": True, "df": df.to_dict('records')}


# PRODUCERS

@app.route('/producers', methods=["GET"])
def get_producers(): # ok
    
    df = pd.read_csv("database/produtores.csv")
    print(df)

    return {"success": True, "df": df.to_dict('records')}

@app.route('/producers/<user_id>', methods=["GET"])
def get_producers_user(user_id):
    
    df_prod = pd.read_csv("database/produtores.csv")
    user_dict = get_user(user_id)
    if not user_dict["success"]:
        return {"success": False, "message": "Erro ao buscar usuário"}, 400

    print("user:", user_dict["df"])
    df_resp = fn.get_distance(df_prod, user_dict["df"]["longitude"]["0"], user_dict["df"]["latitude"]["0"])

    return {"success": True, "df": df_resp.to_dict('records')}



# DISTRIBUTERS

@app.route('/distributers', methods=["GET"])
def get_distributers(): # ok
    
    df = pd.read_csv("database/distribuidoras.csv")
    
    print(df)
    return {"success": True, "df": df.to_dict('records')}


# IMOVEIS

@app.route('/imoveis/user/<user_id>', methods=["GET"])
def get_imoveis_user(user_id): # ok
    
    # get dataframe data
    df_imoveis = pd.read_csv("database/imoveis.csv").where(filter) # x
    df_consumo = pd.read_csv("database/consumo.csv")
    df_produtores = pd.read_csv("database/produtores.csv") # y
    
    #filter
    filter = df_imoveis["usuario_id"] == int(user_id)
    df_imoveis = df_imoveis.where(filter)

    # merge dataframes
    df_view = pd.merge(df_imoveis, df_consumo, how="left", left_on=['id'], right_on=['imovel_id'])
    df_view = pd.merge(df_view, df_produtores, how="left", left_on=['produtor_id'], right_on=['id'])

    # crete new columns
    expenses_day = []
    expenses_night = []
    for c in range(len(df_view["consumo_dia"])):

        exp_day = df_view["consumo_dia"][c] * df_view["preco_kwh_dia"][c]
        exp_night = df_view["consumo_noite"][c] * df_view["preco_kwh_noite"][c]
        
        expenses_day.append(exp_day)
        expenses_night.append(exp_night)

    df_view["gastos_dia"] = expenses_day
    df_view["gastos_noite"] = expenses_night

    # select columns and sort
    df_view = df_view[
        [
            "id_y",
            "nome_x",
            "nome_y",
            "consumo_dia",
            "consumo_noite",
            "preco_kwh_dia",
            "preco_kwh_noite",
            "gastos_dia",
            "gastos_noite",
            "periodo",
            "energia_biomassa", 
            "energia_eolica", 
            "energia_fossil", 
            "energia_geotermica", 
            "energia_hidreletrica", 
            "energia_maremotriz", 
            "energia_nuclear", 
            "energia_solar"]
    ].sort_values("periodo", ascending=False)
    

    return {"success": True, "df": df_view.to_dict('records')}



@app.route('/imoveis/consumos/<filter_by>/<id>', methods=["GET"])
def get_imoveis_consumos(filter_by, id): # ok
    
    # get dataframe data
    df_imoveis = pd.read_csv("database/imoveis.csv") # x
    df_consumo = pd.read_csv("database/consumo.csv")
    df_produtores = pd.read_csv("database/produtores.csv") # y
    
    #filter
    if filter_by == "user":
        filter = df_imoveis["usuario_id"] == int(id)
        df_imoveis = df_imoveis.where(filter)

    elif filter_by == "imovel":
        filter = df_imoveis["id"] == int(id)
        df_imoveis = df_imoveis.where(filter)

    else:
        return {"success": False, "message": "url errada passe 'user' ou 'imovel' depois de 'consumos/'"}, 400


    # merge dataframes
    df_view = pd.merge(df_imoveis, df_consumo, how="inner", left_on=['id'], right_on=['imovel_id'])
    df_view = pd.merge(df_view, df_produtores, how="inner", left_on=['produtor_id'], right_on=['id'])

    # crete new columns
    # expenses_day = []
    # expenses_night = []
    # for c in range(len(df_view["consumo_dia"])):

    #     exp_day = df_view["consumo_dia"][c] * df_view["preco_kwh_dia"][c]
    #     exp_night = df_view["consumo_noite"][c] * df_view["preco_kwh_noite"][c]
        
    #     expenses_day.append(exp_day)
    #     expenses_night.append(exp_night)

    # df_view["gastos_dia"] = expenses_day
    # df_view["gastos_noite"] = expenses_night

    # select columns and sort
    # df_view = df_view[
    #     [
    #         "id_y",
    #         "nome_x",
    #         "nome_y",
    #         "consumo_dia",
    #         "consumo_noite",
    #         "preco_kwh_dia",
    #         "preco_kwh_noite",
    #         "gastos_dia",
    #         "gastos_noite",
    #         "periodo",
    #         "energia_biomassa", 
    #         "energia_eolica", 
    #         "energia_fossil", 
    #         "energia_geotermica", 
    #         "energia_hidreletrica", 
    #         "energia_maremotriz", 
    #         "energia_nuclear", 
    #         "energia_solar"]
    # ].sort_values("periodo", ascending=False)
    

    return {"success": True, "df": df_view.to_dict('records')}


@app.route('/create/imovel', methods=["POST"])
def post_imovel(): # ok

    # verify        
    try:
        json_data = request.get_json(force=True)
    except:
        return {"success": False, "message": "json inválido"}, 400

    keys = ("nome", "endereco", "distribuidora_id", "usuario_id")
    for k in keys:
        if k not in json_data:
            return {"success": False, "message": f"Falta campo {k} no json"}, 400
    

    #_s = source
    df_s = pd.read_csv(f"database/imoveis.csv") # carrega csv
    df_s = df_s[["id", "nome", "endereco", "distribuidora_id", "usuario_id"]]

    #_n = new
    df_n = pd.DataFrame(data=json_data) # cria df com dados novos
    df_n["id"] = len(df_s) + 1

    df_f = df_s.append(df_n, ignore_index = True) # appenda no existente

    #_f = final
    df_f.to_csv("database/imoveis.csv") # re-cria a tabela

    return {"success": True}




# TEMPLATE vv

@app.route('/read/<table_name>', methods=["GET"])
def read(table_name):
    # a = {"x": ["a", "b", "c"], "y": [1,2,3]}
    
    df = pd.read_csv(f"{table_name}.csv")
    print(df)

    return {"success": True, "df": df.to_dict('records')}

 

@app.route('/write/<table_name>', methods=["POST"])
def write(table_name):
    
    try:
        json_data = request.get_json(force=True)
    except:
        return {"success": False, "message": "json inválido"}, 400

    #_s = source
    df_s = pd.read_csv(f"{table_name}.csv") # carrega csv

    #_n = new
    df_n = pd.DataFrame(data=json_data) # cria df com dados novos
    df_f = df_s.append(df_n, ignore_index = True) # appenda no existente

    #_f = final
    df_f.to_csv(f"database/{table_name}.csv") # re-cria a tabela

    return {"success": True, "df": df_f.to_dict('records')}



@app.route('/create/<table_name>', methods=["POST"])
def create(table_name):
    
    json_data = request.get_json(force=True)

    df = pd.DataFrame(data=json_data) # cria df os dados
    df.to_csv(f"database/{table_name}.csv") # cria a tabela (write)

    return {"success": True, "df": df.to_dict('records')}



if __name__ == '__main__':
    app.run(debug=True) # host="0.0.0.0"