class Types::PokemonType < Types::BaseObject
  field :id, ID, null: false
  field :name, String, null: true
  field :kind, String, null: true
  field :generation, Integer, null: true

  def pokemon_name
    object.name
  end
end
