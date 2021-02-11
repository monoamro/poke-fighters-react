import axios from 'axios';
import css from "./poke.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


const Poke = ({pokemon}) => {

    return (
      <div>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Test</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

        <div className ='Poke'>

           
           <p className='title_name'>Name</p>
           <p>{pokemon.name.english}</p>
           <p className='title_types'>Type</p>
          
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
           
      </div>      
      </div>        
              
        
        
        )
}

export default Poke;