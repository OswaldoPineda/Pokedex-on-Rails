class Types::PokemonType < Types::BaseObject
  field :id, ID, null: false
  field :name, String, null: true
  field :kinds, [Types::KindType], null: false
  field :generation, Integer, null: true

  def pokemon_name
    object.name
  end
end
