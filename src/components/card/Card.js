import "./style.css";
import { Link } from "react-router-dom";

const Card = ({ pokemon, index }) => {
  return (
    <Link style={{ textDecoration: "none" }} to={`/pokemons/${pokemon.id}`}>
      <div key={index} className="card">
        <h2 className="poke-name">{pokemon.name.english}</h2>
      </div>
    </Link>
  );
};

export default Card;
