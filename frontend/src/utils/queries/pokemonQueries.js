export const POKEMONS_QUERY = `{
  pokemons {
    id
    name
    kind
    generation
  }
}`;

export const POKEMON_CREATE = `
  mutation CreatePokemon($name: String!, $generation: Int!, $kind: String!) {
    createPokemon(input: {
      name: $name,
      generation: $generation,
      kind: $kind
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
