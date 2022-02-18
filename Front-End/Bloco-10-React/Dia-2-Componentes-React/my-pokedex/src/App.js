import './App.css';
import React from 'react';
import pokemons from './data';
import Pokedex from './Pokedex';


class App extends React.Component {
  render() {
    return (
      < div className="App">
        <h1>Pokemon's!</h1>
        <Pokedex pokemones={pokemons} />
      </div>
    )}
  };

export default App;
