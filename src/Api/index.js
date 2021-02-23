import axios from "axios";

const baseUrl =
  "http://ec2-18-185-96-249.eu-central-1.compute.amazonaws.com/api";
const pokeApiUrl = "https://pokeapi.co/api/v2/pokemon/";

const Api = {
  getAll: () => axios.get(`${baseUrl}/pokemons`),
  getById: (id) => axios.get(`${baseUrl}/pokemons/${id}`),
  postFight: (requestBody) => axios.post(`${baseUrl}/fight`, requestBody),
  getImage: (id) => axios.get(`${pokeApiUrl}${id}`),
};

export default Api;
