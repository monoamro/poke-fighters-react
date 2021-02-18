import axios from 'axios';
import css from "./poke.css";
import React from 'react';
import ReactCardFlip from 'react-card-flip';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Api from '../Api';

const CardStyle = {
  border: "1px solid black",
  padding: "20px",
  margin: "20px",
  width: "200px",
  height: "300px"
};

const Poke = () => {
/*    const {id} = useParams();
    useEffect(() => {
      Api.getById(id)
      .then(res => {
        setPokemon(res.data)
      })
      .catch(e => console.error(e))
    }, [id])    
    console.log(pokemon)
    */
   const [isFlipped, setIsFlipped] = React.useState(false);
   
   return(

    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div
        style={CardStyle}
        onMouseEnter={() => setIsFlipped((prev) => !prev)}
        className="CardFront"
      >
        <div>
        <div className = 'Poke'>
        
            
      
        <p className='title_name'>Name</p>
        <p>{pokemon.name.english}</p>
        <p className='title_types'>Type</p>
        {pokemon.type.map((type) => {
      return <div className ='title_type'><p>{type}</p></div>;
      
    })}
         
        </div>    
          
          
         
        </div>
      </div>
      <div
        style={CardStyle}
        onMouseLeave={() => setIsFlipped((prev) => !prev)}
        className="CardBack"
      >
    
    <div className='title_info'>
     <div className="title_data title_data--weight">
    <p>Attack: {pokemon.base.Attack}</p>
    </div>
    <div className="title_data title_data--weight">
    <p>Defense: {pokemon.base.Defense}</p>
    </div>
    <div className="title_data title_data--weight">
    <p>Hit points: {pokemon.base.HP}</p>
    </div>
    <div className="title_data title_data--weight">
    <p>Special Attack: {pokemon.base["Sp. Attack"]}</p>
    </div>
    <div className="title_data title_data--weight">
    <p>Special Defense: {pokemon.base["Sp. Defense"]}</p>
    </div>
    <div className="title_data title_data--weight">
    <p>Speed: {pokemon.base.Speed}</p>
    </div>
      </div>
    
  </div>
    </ReactCardFlip>
    
   );
  };

export default Poke;
