class Types::MutationType < Types::BaseObject
  field :deletePokemon, mutation: Mutations::DeletePokemon
  field :updatePokemon, mutation: Mutations::UpdatePokemon
  field :createPokemon, mutation: Mutations::CreatePokemon
end
