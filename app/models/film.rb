class Film < ActiveRecord::Base
  attr_accessible :description, :title

  has_many :showings
  has_many :theaters, through: :showings, uniq: true
end
