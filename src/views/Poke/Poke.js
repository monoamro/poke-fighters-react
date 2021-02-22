import axios from "axios";
import "./poke.css";
import React from "react";
import ReactCardFlip from "react-card-flip";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Api from "../../Api";
import { Link } from "react-router-dom";

const CardStyle = {
  border: "1px solid black",
  display: "flex",
  "flex-direction": "column",
  "justify-content": "space-around",
  padding: "20px",
  margin: "20px",
  width: "250px",
  height: "350px",
};

const Poke = () => {
  const [pokemon, setPokemon] = useState();
  const [image, setImage] = useState();
  const { id } = useParams();
  useEffect(() => {
    Api.getById(id)
      .then((res) => {
        setPokemon(res.data[0]);
      })
      .catch((e) => console.error(e));
  }, [id]);

  useEffect(() => {
    if (pokemon) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`)
        .then((result) => setImage(result.data.sprites.front_default))
        .catch((error) => console.log(error));
    }
  }, [pokemon]);

  const [isFlipped, setIsFlipped] = useState(false);

  return pokemon ? (
    <div className="container-card">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        {/* Card-Front */}
        <div
          style={CardStyle}
          onMouseEnter={() => setIsFlipped((prev) => !prev)}
          className="CardFront"
        >
          <div>
            <div className="Poke">
              <p>{pokemon.name.english}</p>
              {image ? <img src={image} alt="Pokemon Image" /> : null}
              {pokemon.type.map((type) => {
                return (
                  <div className="title_type">
                    <p>{type}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Card-Back */}

        <div
          style={CardStyle}
          onMouseLeave={() => setIsFlipped((prev) => !prev)}
          className="CardBack"
        >
          <div className="title_info">
            <div className="title_data">Attack: {pokemon.base.Attack}</div>
            <div className="title_data">Defense: {pokemon.base.Defense}</div>
            <div className="title_data">Hit points: {pokemon.base.HP}</div>
            <div className="title_data">
              Sp. Attack: {pokemon.base["Sp. Attack"]}
            </div>
            <div className="title_data">
              Sp. Defense: {pokemon.base["Sp. Defense"]}
            </div>
            <div className="title_data">Speed: {pokemon.base.Speed}</div>
          </div>
        </div>
      </ReactCardFlip>
      <Link to="/pokemons">
        <button>Go back to all pokemons</button>
      </Link>
      <Link to="/fight">
        <button>Let's fight!</button>
      </Link>
    </div>
  ) : (
    <p>Loading pokemon</p>
  );
};

export default Poke;
