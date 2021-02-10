import axios from 'axios'

const Poke = ({pokemon}) => {
    return (
        <div className ='Poke'>
        <h1>This is Poke</h1>
           <p className='title'>Name</p>
           <p>{pokemon.name.english}</p>
           <p className='title'>Type</p>
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
              
        
        
        )
}

export default Poke;