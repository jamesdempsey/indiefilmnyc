class FilmSerializer < ActiveModel::Serializer
  embed :ids, include: true

  attributes :id, :description, :title

  has_many :showings
end
