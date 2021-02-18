import Card from "./Card";
import { useState, useEffect } from "react";
import Api from "../Api/";

const Pokemons = () => {
  const [pokemons, setPokemons] = useState();

  useEffect(() => {
    Api.getAll()
      .then((response) => setPokemons(response.data))
      .catch((error) => console.error(error));
  }, []);
   console.log(pokemons);
  return (
    <div>
      {pokemons?.slice(0, 10).map((pokemon, index) => {
        return <Card key={index} pokemon={pokemon} />;
      })}
    </div>
  );
};

export default Pokemons;
