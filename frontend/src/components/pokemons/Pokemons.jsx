import React, { Component } from 'react';
import { POKEMONS_QUERY, POKEMON_DELETE } from '../../utils/queries/pokemonQueries';
import { withRouter } from 'react-router';
import axios from 'axios';
import { Link } from "react-router-dom";
import { API_URL } from '../../utils/api-config/api';

class Pokemons extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
    };
  }

  componentDidMount = () => {
    axios({
      url: API_URL,
      method: 'post',
      data: {
        query: POKEMONS_QUERY,
        variables: { first: 10 }
    }}).then((result) => {
      const { data } = result.data;
      this.setState({pokemons: data.pokemons})
    });
  };

  confirmDelete = (id) => {
    const confirmRes = window.confirm("Do you want to continue ?");
    if (confirmRes) {
      axios({
        url: API_URL,
        method: 'post',
        data: {
          query: POKEMON_DELETE,
          variables: { id }
        }
      }).then(res => {
        const { data } = res.data;
        const newPokemons = this.state.pokemons.filter(poke => poke.id !== data.id);
        this.setState({pokemons: newPokemons});
      })
    }
  }

  render() {
    return (
      <main className="pokemon-list">
        { this.state.pokemons.map((poke) => {
            return (
              <article className="pokemon-card">
                <h1>ID: { poke.id }</h1>
                <span>Name: {poke.name}</span>
                <span>Generation: {poke.generation}</span>
                <Link to={`/pokemon/${poke.id}`} className="pokemon-card__show">Show</Link>
                <div className="buttons-container">
                  <Link to={`/pokemon/edit/${poke.id}`} className="pokemon-card__edit">edit</Link>
                  <button onClick={e => this.confirmDelete(poke.id)} className="pokemon-card__delete">Delete</button>
                </div>
              </article>
            )
          }
        )}
      </main>
    )
  }
};

export default withRouter(Pokemons);
