import React, { Component } from 'react';
import { POKEMON_CREATE } from '../../utils/queries/pokemonQueries';
import axios from 'axios';
import { API_URL } from '../../utils/api-config/api';

class CreatePokemon extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      kindId: 0,
      generation: 0,
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.savePokemon();
  };

  savePokemon = () => {
    axios({
      url: API_URL,
      method: 'post',
      data: {
        query: POKEMON_CREATE,
        variables: this.state
      }
    }).then(res => {
      this.setState({ name: '', generation: 0, kindId: 0 });
    });
  };

  render() {
    return(
      <form onSubmit={ e => this.onSubmit(e) }>
        <h4>Create new Pokemon!</h4>
        <label>Name:</label>
        <input
          type="text"
          value={this.state.name}
          placeholder="Name"
          onChange={e => this.setState({name: e.target.value})}
          ></input>
        <label>Generation:</label>
        <input
          type="text"
          value={this.state.generation}
          placeholder="Generation"
          onChange={e => this.setState({generation: parseInt(e.target.value, 10)})}
          ></input>
        <label>Kind Id:</label>
        <input
          type="text"
          value={this.state.kindId}
          placeholder="Kind id"
          onChange={e => this.setState({kindId: parseInt(e.target.value, 10)})}
          ></input>
        <button type="submit">Create Pokemon!!!!</button>
      </form>
    )
  }
}

export default CreatePokemon;
