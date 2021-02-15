import axios from "axios";

const baseUrl = "https://pokefighters.herokuapp.com/pokemons";

const Api = {
  getAll: () => axios.get(baseUrl),
  getById: (id) => axios.get(`${baseUrl}/${id}`),
  getInfoById: (id, info) => axios.get(`${baseUrl}/${id}/${info}`),
};

export default Api;
