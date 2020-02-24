export const POKEMONS_QUERY = `
  query Pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      generation
      kinds {
        name
      }
    }
  }
`;

export const POKEMON_CREATE = `
  mutation CreatePokemon($name: String!, $kindId: ID!, $generation: Int!) {
    createPokemon(input: {
      name: $name,
      kindId: $kindId,
      generation: $generation
    }) {
      errors
    }
  }
`;

export const POKEMON_QUERY = `
  query Pokemon($id: ID!) {
    pokemon(id: $id) {
        id
        name
        generation
    }
  }
`;

export const POKEMON_UPDATE = `
  mutation UpdatePokemon($id: ID!, $name: String!) {
    updatePokemon(input: {
      id: $id,
      name: $name
    }) {
      errors
    }
  }
`;

export const POKEMON_DELETE = `
  mutation DeletePokemon($id: ID!) {
    deletePokemon(input: {
      id: $id
    }) {
      errors
      pokemon {
        id
      }
    }
  }
`;
