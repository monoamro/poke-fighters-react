import "./App.css";
import { Route, Switch } from "react-router-dom";
import Poke from "./views/Poke/Poke";
import Pokemons from "./views/pokemons/Pokemons";

function App() {
  return (
    <div className="App">
      <Switch>

        <Route path="/pokemons/:id">
          <Poke />
        </Route>

        <Route path="/">
          <Pokemons />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
