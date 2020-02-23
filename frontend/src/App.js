import React, { Component } from 'react';
import Pokemons from './components/pokemons/Pokemons';
import Pokemon from './components/pokemons/Pokemon';
import UpdatePokemon from './components/pokemons/UpdatePokemon';
import Header from './components/header/Header';
import Login from "./components/authentication/Login";
import CreatePokemon from './components/pokemons/CreatePokemon';
import { Switch, Route } from "react-router-dom";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedPokemon: null
    };

    this.selectPokemon.bind(this);
  }

  selectPokemon = (pokemon) => {
    this.setState({selectedUser: pokemon})
  };

  render () {
    return (
      <div className="App">
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={Pokemons} />
            <Route exact path="/pokemon/:id" component={Pokemon} />
            <Route exact path="/pokemon/edit/:id" component={UpdatePokemon} />
            <Route exact path="/create" component={CreatePokemon} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
