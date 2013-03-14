class Theater < ActiveRecord::Base
  attr_accessible :name

  has_many :showings
  has_many :films, through: :showings
end
