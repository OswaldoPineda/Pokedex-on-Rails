class CreateJoinTablePokemonKind < ActiveRecord::Migration[6.0]
  def change
    create_join_table :pokemons, :kinds do |t|
      t.index [:pokemon_id, :kind_id]
      t.index [:kind_id, :pokemon_id]
    end
  end
end
