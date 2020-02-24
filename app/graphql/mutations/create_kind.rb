module Mutations
  class CreateKind < BaseMutation
     argument :name, String, required: true

     field :kind, Types::KindType, null: false
     field :errors, [String], null: false

     def resolve(name:)
       byebug
       kind = Kind.new(name: name)
       if kind.save
         {
           kind: kind,
           errors: []
         }
       else 
         {
           kind: nil,
           errors: kind.errors.full_messages
         }
       end
     end
  end
end
