module Mutations
  class DeletePokemon< BaseMutation
    argument :id, ID, required: true

    field :pokemon, Types::PokemonType, null: false
    field :errors, [String], null: false

    def resolve(id:)
      pokemon = Pokemon.find(id)
      if pokemon.delete
        { 
          pokemon: pokemon,
          errors: []
        }
      else
        {
          pokemon: nil,
          errors: pokemon.errors.full_messages
        }
      end
    end
  end
end

