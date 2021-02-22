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
  const [pokemonTurn, setPokemonTurn] = useState("First");
  const [firstPokeImage, setFirstPokeImage] = useState();
  const [secondPokeImage, setSecondPokeImage] = useState();
  const [winnerPokeImage, setWinnerPokeImage] = useState();



  useEffect(() => {
    Api.getAll()
      .then((response) => setPokemons(response.data))
      .catch((error) => console.error(error));
  }, []);

  const setImage = (pokeId) => {
    if (!firstPokeImage) {
      Api.getImage(pokeId)
          .then((result) => setFirstPokeImage(result.data.sprites.front_default))
          .catch(e => console.error(e))
    } else if (!secondPokeImage){
      Api.getImage(pokeId)
          .then((result) => setSecondPokeImage(result.data.sprites.front_default))
          .catch(e => console.error(e))
    } else {
      Api.getImage(pokeId)
          .then((result) => setWinnerPokeImage(result.data.sprites.front_default))
          .catch(e => console.error(e))
    }
  }

  const fight = () => {
    
    if (Object.keys(fightingPokes).length === 2) {
      Api.postFight(fightingPokes)
        .then((response) => {
          setWinningPoke(response.data[0]);
          setImage(response.data[0].id);
          setFightingPokes({});
          setFirstPoke();
          setSecondPoke();
          setFirstPokeImage();
          setSecondPokeImage();
          setPokemonTurn("First");
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
      setImage(poke.id);
      setPokemonTurn("Second");
    } else {
      fightingPokes.secondPokeID = poke.id;
      setSecondPoke(poke);
      setImage(poke.id);
    }
  };

  return (
    <div className="flex-fight">
      <div className="info-fight">
        <h2>Select your {pokemonTurn} Pokemon</h2>
        <h2>First pokemon: {firstPoke?.name.english}</h2>
        <img src={firstPokeImage}></img>
        <h2>Second pokemon: {secondPoke?.name.english}</h2>
        <img src={secondPokeImage}></img>
        <button onClick={fight}>Fight!</button>
        { winningPoke ? (<div><h1>Winner: {winningPoke?.name?.english}</h1>
        <img src={winnerPokeImage}></img></div>) : <div></div> } 
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
