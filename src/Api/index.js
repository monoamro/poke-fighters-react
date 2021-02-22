import axios from "axios";

const baseUrl = "https://pokefighters.herokuapp.com";

const Api = {
  getAll: () => axios.get(`${baseUrl}/pokemons`),
  getById: (id) => axios.get(`${baseUrl}/pokemons/${id}`),
  postFight: (requestBody) => axios.post(`${baseUrl}/fight`, requestBody),
};

export default Api;
