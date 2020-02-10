class Mutations::CreatePokemon < Mutations::BaseMutation
  argument :name, String, required: true
  argument :kind, String, required: true
  argument :generation, Integer, required: true

  field :pokemon, Types::PokemonType, null: false
  field :errors, [String], null: false

  def resolve(name:, kind:, generation:)
    pokemon = Pokemon.new(name: name, kind: kind, generation: generation)
    if pokemon.save
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
