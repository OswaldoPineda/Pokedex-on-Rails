module Mutations
  class UpdatePokemon < BaseMutation
    # TODO: define arguments
    argument :id, ID, required: true
    argument :name, String, required: true

    # TODO: define return fields
    field :pokemon, Types::PokemonType, null: false
    field :errors, [String], null: false

    # TODO: define resolve method
    def resolve(id:, name:)
      pokemon = Pokemon.find(id)
      if pokemon.update(name: name)
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
