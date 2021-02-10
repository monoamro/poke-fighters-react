const Card = ({ pokemon }) => {
  return (
    <div className="container-card">
      <h2>{pokemon.name.english}</h2>
      {pokemon.type.map((type) => {
        return <p>Type: {type}</p>;
      })}
      <p>Attack: {pokemon.base.Attack}</p>
      <p>Defense: {pokemon.base.Defense}</p>
      <p>HP: {pokemon.base.HP}</p>
      <p>Sp. Attack: {pokemon.base["Sp. Attack"]}</p>
      <p>Sp. Defense: {pokemon.base["Sp. Defense"]}</p>
      <p>Speed: {pokemon.base.Speed}</p>
    </div>
  );
};

export default Card;
