class TheaterSerializer < ActiveModel::Serializer
  embed :ids, include: true

  attributes :id, :name

  has_many :showings
  has_many :films, through: :showings
end
