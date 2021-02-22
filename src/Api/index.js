import axios from "axios";

const baseUrl = "https://pokefighters.herokuapp.com";
const pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon/'

const Api = {
  getAll: () => axios.get(`${baseUrl}/pokemons`),
  getById: (id) => axios.get(`${baseUrl}/pokemons/${id}`),
  postFight: (requestBody) => axios.post(`${baseUrl}/fight`, requestBody),
  getImage: (id) => axios.get(`${pokeApiUrl}${id}`)
};

export default Api;
