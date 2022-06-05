from flask import Flask, request
import pandas as pd
# import json

# import functions as fn

app = Flask(__name__)


## TO CONSUMERS
@app.route('/user/<user_id>', methods=["GET"])
def get_user(user_id):
    
    df = pd.read_csv("backend/database/usuarios.csv")
    
    filter = df["id"] == int(user_id)
    df = df.where(filter)
    
    print(df)
    return {"success": True, "df": df.to_dict('records')}


# PRODUCERS

@app.route('/producers', methods=["GET"])
def get_producers(): # get all producers
    
    df = pd.read_csv("backend/database/produtores.csv")
    print(df)

    return {"success": True, "df": df.to_dict('records')}


# DISTRIBUTERS

@app.route('/distributers', methods=["GET"])
def get_distributers(): # get all distributes
    
    df = pd.read_csv("backend/database/distribuidoras.csv")
    
    print(df)
    return {"success": True, "df": df.to_dict('records')}


# IMOVEIS

@app.route('/imoveis/<user_id>', methods=["GET"])
def get_imoveis(user_id): # get consume by consumer/property
    
    # get dataframe data
    df_imoveis = pd.read_csv("backend/database/imoveis.csv")
    df_consumo = pd.read_csv("backend/database/consumo.csv")
    
    filter = df_imoveis["usuario_id"] == int(user_id)
    df_imoveis = df_imoveis.where(filter)

    # merge dataframes
    df_view = pd.merge(df_imoveis, df_consumo, how="inner", left_on=['id'], right_on=['imovel_id']).sort_values("periodo", ascending=False)

    # return {"success": True, "df": df_view.to_dict('records')}
    # crete new columns
    expenses_total = []
    consumo_total = []
    for c in range(len(df_view["consumo_dia"])):

        exp_day = df_view["consumo_dia"][c] * df_view["preco_kwh_dia"][c]
        exp_night = df_view["consumo_noite"][c] * df_view["preco_kwh_noite"][c]
        exp_total = exp_day + exp_night

        expenses_total.append(exp_total)


    df_view["gastos_total"] = expenses_total

    # select columns and sort
    df_view = df_view[
        [
            "nome_x",
            "nome_y",
            "consumo_dia",
            "consumo_noite",
            "preco_kwh_dia",
            "preco_kwh_noite",
            "gastos_dia",
            "gastos_noite",
            "gastos_total",
            "economia",
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



@app.route('/imoveis/consumos/<imovel_id>', methods=["GET"])
def get_imoveis_consumos(imovel_id): # get consume by consumer/property
    
    # get dataframe data
    df_imoveis = pd.read_csv("backend/database/imoveis.csv")
    df_consumo = pd.read_csv("backend/database/consumo.csv")
    df_produtores = pd.read_csv("backend/database/produtores.csv")
    df_distribuidoras = pd.read_csv("backend/database/distribuidoras.csv")
    
    filter = df_imoveis["id"] == int(imovel_id)
    df_imoveis = df_imoveis.where(filter)

    # merge dataframes
    df_view = pd.merge(df_imoveis, df_consumo, how="inner", left_on=['id'], right_on=['imovel_id'])
    df_view = pd.merge(df_view, df_produtores, how="inner", left_on=['produtor_id'], right_on=['id'])
    df_view = pd.merge(df_view, df_distribuidoras, how="inner", left_on=['distribuidora_id'], right_on=['id'])

    # crete new columns
    expenses_day = []
    expenses_night = []
    expenses_total = []
    economies = []
    for c in range(len(df_view["consumo_dia"])):

        exp_day = df_view["consumo_dia"][c] * df_view["preco_kwh_dia"][c]
        exp_night = df_view["consumo_noite"][c] * df_view["preco_kwh_noite"][c]
        exp_total = exp_day + exp_night

        default_price = (df_view["consumo_dia"][c] + df_view["consumo_noite"][c]) * df_view["preco_kwh"][c]
        economy = default_price - (exp_day + exp_night)

        expenses_day.append(exp_day)
        expenses_night.append(exp_night)
        expenses_total.append(exp_total)

        economies.append(economy)

    df_view["gastos_dia"] = expenses_day
    df_view["gastos_noite"] = expenses_night
    df_view["gastos_total"] = expenses_total
    df_view["economia"] = economies

    # select columns and sort
    df_view = df_view[
        [
            "nome_x",
            "nome_y",
            "consumo_dia",
            "consumo_noite",
            "preco_kwh_dia",
            "preco_kwh_noite",
            "gastos_dia",
            "gastos_noite",
            "gastos_total",
            "economia",
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


@app.route('/create/imovel', methods=["POST"])
def post_imovel(): # adds new property to client

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


## TO PRODUCERS

@app.route('/producao/<produtor_id>', methods=["GET"]) # get production by producer
def get_producao(produtor_id):

    # get dataframe data

    df_producao = pd.read_csv("backend/database/producao.csv")
    filter = df_producao["produtor_id"] == int(produtor_id)

    df_producao = df_producao.where(filter)

    return {"success": True, "df": df_producao.to_dict('records')}



# route to chance prices

@app.route('/alterar_precos', methods=["POST"])
def post_alterar_precos():

    # verify
    try:
        json_data = request.get_json(force=True)
    except:
        return {"success": False, "message": "json inválido"}, 400

    keys = ("produtor_id","preco_kwh_dia", "preco_kwh_noite")
    for k in keys:
        if k not in json_data:
            return {"success": False, "message": f"Falta campo {k} no json"}, 400
    

    #_s = source
    df_s = pd.read_csv("backend/database/produtores.csv")

    # change prices in dataframe

    df_s.loc[df_s['id'] == int(json_data["produtor_id"]), 'preco_kwh_dia'] = float(json_data["preco_kwh_dia"])
    df_s.loc[df_s['id'] == int(json_data["produtor_id"]), 'preco_kwh_noite'] = float(json_data["preco_kwh_noite"])

    # write to csv

    df_s.to_csv("backend/database/produtores.csv")

    return {"success": True}




# CREATE TABLE BY POST
@app.route('/create/<table_name>', methods=["POST"])
def create(table_name):
    
    json_data = request.get_json(force=True)

    df = pd.DataFrame(data=json_data) # cria df os dados
    df.to_csv(f"database/{table_name}.csv") # cria a tabela (write)

    return {"success": True, "df": df.to_dict('records')}
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







if __name__ == '__main__':
    app.run(debug=True) # host="0.0.0.0"