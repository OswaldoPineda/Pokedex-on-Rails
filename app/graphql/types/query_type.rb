module Types
  class QueryType < Types::BaseObject
    field :pokemons, [Types::PokemonType], null: false do
      argument :first, Integer, required: true
    end

    def pokemons(first:)
      Pokemon.first(first)
    end

    #field :pokemons, [Types::PokemonType], null: false

    #def pokemons
    #  Pokemon.all
    #end

    field :pokemon, Types::PokemonType, null: false do
      argument :id, ID, required: true
    end

    def pokemon(id:)
      Pokemon.find(id)
    end

    #field :kinds, [Types::KindType], null: false

    #def kinds
    #  Kind.all
    #end

    field :kinds, [Types::KindType], null: false do
      argument :first, Integer, required: true
    end

    def kinds(first:)
      Kind.first(first)
    end

    field :kind, Types::KindType, null: false do
      argument :id, ID, required: true
    end

    def kind(id:)
      Kind.find(id)
    end
  end
end
