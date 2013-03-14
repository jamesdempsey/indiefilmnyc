# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

def generate_film_title
  Faker::Lorem.words(rand(1..5)).join(' ').titleize
end

def generate_film_description
  Faker::Lorem.paragraph(rand(4..7))
end

def generate_theater_name
  theater_affixes = ['Cinema', 'Theater', 'Center']
  [Faker::Lorem.words(rand(1..2)).join(' ').titleize, theater_affixes.sample].join(' ')
end

def generate_showing_hash
  film_id = Film.all.sample.id
  theater_id = Theater.all.sample.id
  showtime = DateTime.now + rand(1.0..31.0)
  {film_id: film_id, theater_id: theater_id, showtime: showtime}
end

100.times do
  Film.create(title: generate_film_title, description: generate_film_description)
end

100.times do
  Theater.create(name: generate_theater_name)
end

500.times do
  Showing.create(generate_showing_hash)
end
