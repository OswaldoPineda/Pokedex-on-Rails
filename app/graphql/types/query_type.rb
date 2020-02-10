module Types
  class QueryType < Types::BaseObject
    field :pokemons, [Types::PokemonType], null: false

    def pokemons
      Pokemon.all
    end

    field :pokemon, Types::PokemonType, null: false do
      argument :id, ID, required: true
    end

    def pokemon(id:)
      Pokemon.find(id)
    end
  end
end
