class TheaterSerializer < ActiveModel::Serializer
  embed :ids, include: true

  attributes :id, :name

  has_many :showings
end
