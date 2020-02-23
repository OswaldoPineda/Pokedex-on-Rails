# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_02_23_220231) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "kinds", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "kinds_pokemons", id: false, force: :cascade do |t|
    t.bigint "pokemon_id", null: false
    t.bigint "kind_id", null: false
    t.index ["kind_id", "pokemon_id"], name: "index_kinds_pokemons_on_kind_id_and_pokemon_id"
    t.index ["pokemon_id", "kind_id"], name: "index_kinds_pokemons_on_pokemon_id_and_kind_id"
  end

  create_table "pokemons", force: :cascade do |t|
    t.string "name"
    t.integer "generation"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
