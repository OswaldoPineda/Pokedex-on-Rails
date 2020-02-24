class Types::KindType < Types::BaseObject
  field :id, ID, null: false
  field :name, String, null: false

  def kind_name
    object.name
  end
end
