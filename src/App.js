import "./App.css";
import { Route, Switch } from "react-router-dom";
import Poke from "./components/Poke";
import Pokemons from "./views/pokemons/Pokemons";
import PokeInfo from "./components/PokeInfo";

function App() {
  const pokemons = [
    {
      id: 1,
      name: "Asian Poke",
      type: ["grass", "poison"],
      base: {
        HP: 45,
        Attack: 49,
        Defense: 49,
        "Sp. Attack": 65,
        "Sp. Defense": 65,
        Speed: 45,
      },
    },
    {
      id: 1,
      name: "Persian Jasmin",
      type: ["mean", "poison"],
      base: {
        HP: 2,
        Attack: 110,
        Defense: 200,
        "Sp. Attack": 10,
        "Sp. Defense": 33,
        Speed: 10,
      },
    },
  ];

  return (
    <div className="App">
      <Switch>
        <Route path="/pokemons/:id/:info">
          <PokeInfo pokemon={pokemons[1]} />
        </Route>

        <Route path="/pokemons/:id">
          <Poke pokemon={pokemons[0]} />
        </Route>

        <Route path="/">
          <Pokemons pokemons={pokemons} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
