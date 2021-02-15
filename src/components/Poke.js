import axios from 'axios';
import css from "./poke.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Api from '../Api';


const Poke = () => {
    const [pokemon, setPokemon] = useState();
    const {id} = useParams();
    useEffect(() => {
      Api.getById(id)
      .then(res => {
        setPokemon(res.data)
      })
      .catch(e => console.error(e))
    }, [id])


    return (pokemon ? <div className = 'Poke'>
    <Card border="primary"style={{ width: '30rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title> <p className='title_name'>Name</p>
       <p>{pokemon.name.english}</p>
       <p className='title_types'>Type</p></Card.Title>
        <Card.Text>
                
         
             
    <div className ='title_types'>
      
  {pokemon.type.map((type) => {
    return <div className ='title_type'><p>{type}</p></div>;
    
  })}
  </div>
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
  
  
  </Card.Text>
  </Card.Body>
  </Card>
  </div> : <h1>Loading pokemons</h1>)
}

export default Poke;