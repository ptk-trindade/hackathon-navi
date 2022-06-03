from flask import Flask, request
import pandas as pd
import json

app = Flask(__name__)



@app.route('/read', methods=["GET"])
def read():
    # a = {"x": ["a", "b", "c"], "y": [1,2,3]}
    
    df = pd.read_csv("dados.csv")
    print(df)

    return ({"status": "success", "df": json.loads(df.to_json())}, 200)




@app.route('/write/<variable>', methods=["POST"])
def write(variable):
    
    print(variable)

    json_data = request.get_json()

    df = pd.read_csv("dados.csv") # carrega csv

    df2 = pd.DataFrame(data=json_data) # cria df com dados novos
    df.append(df2, ignore_index = True) # appenda no existente

    df.to_csv("dados.csv") # da um write pro hd

    return ({"status": "success", "df": df.to_json()}, 200)



@app.route('/create', methods=["POST"])
def create():
    
    json_data = request.get_json()

    df = pd.DataFrame(data=json_data) # cria df com dados novos
    df.to_csv("dados.csv") # da um write pro hd

    return ({"status": "success", "df": json.loads(df.to_json())}, 200)




if __name__ == '__main__':
    app.run(debug=True) # host="0.0.0.0"