class RemoveKindToPokemons < ActiveRecord::Migration[6.0]
  def change
    remove_column :pokemons, :kind
  end
end
