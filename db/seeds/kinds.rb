kinds = [
  "fire",
  "water",
  "fighting",
  "flying",
  "poison",
  "rock",
  "bug",
  "ghost",
  "steel",
  "electric",
  "psychic",
  "ice",
  "dragon",
  "dark"
]

kinds.each do |kind|
  Kind.find_or_create_by(name: kind)
end
