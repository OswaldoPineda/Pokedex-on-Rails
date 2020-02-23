import React, { Component } from 'react';
import axios from 'axios';
import { POKEMON_QUERY } from '../../utils/queries/pokemonQueries';
import { API_URL } from '../../utils/api-config/api';

class Pokemon extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemon: ''
    }
  };

  componentDidMount = () => {
    const id =  this.props.match.params.id;
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

  render () {
    const { pokemon } = this.state;
    return (
      <section>
        <h1>{pokemon.name}</h1>
        <span>{pokemon.generation}</span>
      </section>
    );
  }
};

export default Pokemon;
