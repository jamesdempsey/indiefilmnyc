class FilmSerializer < ActiveModel::Serializer
  attributes :id, :description, :title

  has_many :showings

  embed :ids, include: true
end
