class FilmSerializer < ActiveModel::Serializer
  embed :ids, include: true

  attributes :id, :description, :title

  has_many :showings
  has_many :theaters, through: :showings
end
