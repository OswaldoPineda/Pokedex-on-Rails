import React, { Component } from 'react';
import { POKEMON_QUERY, POKEMON_UPDATE } from '../../utils/queries/pokemonQueries';
import axios from 'axios';
import { API_URL } from '../../utils/api-config/api';

class UpdatePokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: {}
    }
  }

  componentDidMount = () => {
    const id =  this.props.match.params.id;
    this.getPokemonInfo(id);
  };

  getPokemonInfo = (id) => {
    axios({
      url: API_URL,
      method: 'post',
      data: {
        query: POKEMON_QUERY,
        variables: { id }
      },
    }).then(res => {
      const { data } = res.data;
      this.setState({pokemon: data.pokemon});
    });
  };

  updatePokemon = (e) => {
    e.preventDefault();
    const { id, name } = this.state.pokemon;
    axios({
      url: API_URL,
      method: 'post',
      data: {
        query: POKEMON_UPDATE,
        variables: {id, name}
      }
    }).then(res => {
      console.log(res);
    })
  };

  render() {
    const { pokemon } = this.state;
    return(
      <form onSubmit={ e => this.updatePokemon(e) }>
        <h4>Update Pokemon!</h4>
        <label>Name:</label>
        <input
          type="text"
          value={pokemon.name}
          placeholder="Name"
          onChange={e => this.setState({pokemon: {...pokemon, name: e.target.value}})}
          ></input>
        <button type="submit">Update Pokemon!!!!</button>
      </form>
    );
  }
}

export default UpdatePokemon;
