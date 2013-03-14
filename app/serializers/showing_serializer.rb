class ShowingSerializer < ActiveModel::Serializer
  attributes :id, :film_id, :theater_id, :showtime
end
