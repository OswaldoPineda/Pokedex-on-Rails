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
        variables: { first: 3 }
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
      <main>
        { this.state.pokemons.map((poke) => {
            return (
              <article>
                <h1>ID: { poke.id }</h1>
                <span>Name: {poke.name}</span><br />
                <span>Generation: {poke.generation}</span><br />
                <Link to={`/pokemon/${poke.id}`}>Show</Link><br />
                <Link to={`/pokemon/edit/${poke.id}`}>edit</Link><br />
                <button onClick={e => this.confirmDelete(poke.id)}>Delete</button>
              </article>
            )
          }
        )}
      </main>
    )
  }
};

export default withRouter(Pokemons);
