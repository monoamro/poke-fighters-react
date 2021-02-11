import axios from 'axios'

const Poke = ({pokemon}) => {
    return (
        <div className ='Poke'>
        <h1>This is Poke</h1>
           <p className='title'>Name</p>
           <p>{pokemon.name}</p>
           <p className='title'>Type</p>
           <p>{pokemon.type}</p>
           <p className='title'>Base</p>
           <p>{pokemon.base}</p>
           
      </div>              
              
        
        
        )
}

export default Poke;