import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Api from "../../Api/";
import "./style.css";

const Fight = () => {
  const [pokemons, setPokemons] = useState();
  const [firstPoke, setFirstPoke] = useState();
  const [secondPoke, setSecondPoke] = useState();
  const [fightingPokes, setFightingPokes] = useState({});
  const [winningPoke, setWinningPoke] = useState();

  useEffect(() => {
    Api.getAll()
      .then((response) => setPokemons(response.data))
      .catch((error) => console.error(error));
  }, []);

  const fight = () => {
    if (Object.keys(fightingPokes).length === 2) {
      Api.postFight(fightingPokes)
        .then((response) => {
          setWinningPoke(response.data[0]);
          setFightingPokes({});
          setFirstPoke();
          setSecondPoke();
        })
        .catch((error) => console.error(error));
    } else {
      alert("Go to hell..");
    }
  };

  const addToFight = async (event) => {
    const poke = await pokemons.find(
      (pokemon) => pokemon.name.english === event.target.innerText
    );
    if (fightingPokes.firstPokeID === undefined) {
      fightingPokes.firstPokeID = poke.id;
      setFirstPoke(poke);
    } else {
      fightingPokes.secondPokeID = poke.id;
      setSecondPoke(poke);
    }
  };

  return (
    <div className="flex-fight">
      <div className="info-fight">
        <h2>First pokemon: {firstPoke?.name.english}</h2>
        <h2>Second pokemon: {secondPoke?.name.english}</h2>
        <button onClick={fight}>Fight!</button>
        <h1>Winner: {winningPoke?.name?.english}</h1>
        <Link to="/pokemons">
          <button type="button">Leave fight area</button>
        </Link>
      </div>
      <div className="poke-container">
        {pokemons?.map((pokemon) => (
          <div className="card" onClick={addToFight}>
            <h3 className="poke-name">{pokemon.name.english}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fight;
