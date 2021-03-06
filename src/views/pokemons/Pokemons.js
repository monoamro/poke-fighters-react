import { useState, useEffect } from "react";
import Api from "../../Api/";
import "./style.css";
import { Suspense, lazy } from "react";
import {Link} from 'react-router-dom';
const Card = lazy(() => import("../../components/card/Card"));

const Pokemons = () => {
  const [pokemons, setPokemons] = useState();

  useEffect(() => {
    Api.getAll()
      .then((response) => setPokemons(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="cards-container">
      <Link to="/fight" >
        <button className="fight-button">Let's fight</button>
      </Link>
      <div className="cards-flex">
        <Suspense fallback={<div className="loading"></div>}>
          {pokemons?.map((pokemon, index) => {
            return <Card key={index} pokemon={pokemon} />;
          })}
        </Suspense>
      </div>
    </div>
  );
};

export default Pokemons;
