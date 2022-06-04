from flask import Flask, request
import pandas as pd
import json

import functions as fn

app = Flask(__name__)



@app.route('/producers', methods=["GET"])
def get_producers():
    
    df = pd.read_csv("database/producers.csv")
    print(df)

    return {"success": True, "df": json.loads(df.to_json())}



@app.route('/user/<user_id>', methods=["GET"])
def get_user(user_id):
    
    df = pd.read_csv("database/users.csv")
    
    filter = df["id"] == int(user_id)
    df = df.where(filter)
    
    print(df)
    return {"success": True, "df": json.loads(df.to_json())}



@app.route('/producers/<user_id>', methods=["GET"])
def get_producers_user(user_id):
    
    df_prod = pd.read_csv("database/producers.csv")
    user_dict = get_user(user_id)
    if not user_dict["success"]:
        return {"success": False, "message": "Erro ao buscar usuário"}, 400

    print("user:", user_dict["df"])
    df_resp = fn.get_distance(df_prod, user_dict["df"]["longitude"]["0"], user_dict["df"]["latitude"]["0"])

    return {"success": True, "df": json.loads(df_resp.to_json())}







# TEMPLATE vv

@app.route('/read/<table_name>', methods=["GET"])
def read(table_name):
    # a = {"x": ["a", "b", "c"], "y": [1,2,3]}
    
    df = pd.read_csv(f"{table_name}.csv")
    print(df)

    return {"success": True, "df": json.loads(df.to_json())}

 

@app.route('/write/<table_name>', methods=["POST"])
def write(table_name):
    
    try:
        json_data = request.get_json(force=True)
    except:
        return {"status": "error", "message": "json inválido"}

    #_s = source
    df_s = pd.read_csv(f"{table_name}.csv") # carrega csv

    #_n = new
    df_n = pd.DataFrame(data=json_data) # cria df com dados novos
    df_f = df_s.append(df_n, ignore_index = True) # appenda no existente

    #_f = final
    df_f.to_csv(f"database/{table_name}.csv") # re-cria a tabela

    return {"success": True, "df": df.to_json()}



@app.route('/create/<table_name>', methods=["POST"])
def create(table_name):
    
    json_data = request.get_json()

    df = pd.DataFrame(data=json_data) # cria df os dados
    df.to_csv(f"database/{table_name}.csv") # cria a tabela (write)

    return {"success": True, "df": json.loads(df.to_json())}



if __name__ == '__main__':
    app.run(debug=True) # host="0.0.0.0"