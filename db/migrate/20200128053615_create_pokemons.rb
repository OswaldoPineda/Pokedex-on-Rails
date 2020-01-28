class CreatePokemons < ActiveRecord::Migration[6.0]
  def change
    create_table :pokemons do |t|
      t.string :name
      t.string :type
      t.integer :generation

      t.timestamps
    end
  end
end
