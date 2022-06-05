import axios from "axios";
const apiClient = axios.create({baseURL: "http://127.0.0.1:5000/", response_type: "json"});


const getImoveis = (usuario_id) => {return apiClient.get(`/imoveis/${usuario_id}`)};

const getImovel = (imovel_id) => {return apiClient.get(`/imoveis/consumo/${imovel_id}`)};

const getProdutor = (usuario_id) => {return apiClient.get(`/producers/${usuario_id}`)};

const postPreco = (produtora_id, novo_preco) => {return apiClient.post('/alterar_precos',{
    produtor_id: produtora_id,
    preco_kwh: novo_preco
  }).then(response =>{
      console.log(response.data.message);
    return response.data.message;
  }).catch(err =>{
    console.log(err);
  })}


export {getImoveis, getImovel, getProdutor, postPreco};