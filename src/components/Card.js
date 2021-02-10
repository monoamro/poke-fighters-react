const Card = ({ pokemon }) => {
  return (
    <div className="container-card">
      <h2>{pokemon.name.english}</h2>
      <p>Type: </p>
      {pokemon.type.map((type) => {
        return <p>{type}</p>;
      })}
      <p>Attack: {pokemon.base.Attack}</p>
      <p>Defense: {pokemon.base.Defense}</p>
      <p>Hit points: {pokemon.base.HP}</p>
      <p>Special Attack: {pokemon.base["Sp. Attack"]}</p>
      <p>Special Defense: {pokemon.base["Sp. Defense"]}</p>
      <p>Speed: {pokemon.base.Speed}</p>
    </div>
  );
};

export default Card;
