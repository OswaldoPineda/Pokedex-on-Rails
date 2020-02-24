class Mutations::CreatePokemon < Mutations::BaseMutation
  argument :name, String, required: true
  argument :generation, Integer, required: true
  argument :kind_id, ID, required: true

  field :pokemon, Types::PokemonType, null: false
  field :errors, [String], null: false

  def resolve(name:, kind_id:, generation:)
    kind = Kind.find(kind_id)
    pokemon = Pokemon.new(name: name, generation: generation)
    pokemon.kinds << kind
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
