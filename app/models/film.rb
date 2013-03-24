class Film < ActiveRecord::Base
  attr_accessible :description, :title, :url

  has_many :showings, order: 'showtime ASC'
  has_many :theaters, through: :showings, uniq: true
end
