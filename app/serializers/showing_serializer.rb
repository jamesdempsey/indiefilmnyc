class ShowingSerializer < ActiveModel::Serializer
  embed :ids, include: true

  attributes :id, :film_id, :theater_id, :showtime

  has_one :theater
end
