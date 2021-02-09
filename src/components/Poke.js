import axios from 'axios'

const Poke = ({pokemon}) => {
    return (
        <div className ='Poke'>
        <h1>This is Poke</h1>
           <p className='title'>Name</p>
           <p>{pokemons.name}</p>
           <p className='title'>Type</p>
           <p>{pokemons.type}</p>
           <p className='title'>Base</p>
           <p>{pokemons.base}</p>
           
      </div>              
              
        
        
        )
}

export default Poke;