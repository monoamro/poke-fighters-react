import axios from "axios";

const PokeInfo = ({ pokemon }) => {
  let { id, name, type, base } = pokemon;
  return (
    <div>
      <p>id: {id}</p>
      <p>name: {name}</p>
      <p>type: {type}</p>
      <p>base: {base}</p>
    </div>
  );
};

export default PokeInfo;
