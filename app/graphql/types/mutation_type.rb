class Types::MutationType < Types::BaseObject
  field :createKind, mutation: Mutations::CreateKind
  field :deletePokemon, mutation: Mutations::DeletePokemon
  field :updatePokemon, mutation: Mutations::UpdatePokemon
  field :createPokemon, mutation: Mutations::CreatePokemon
end
