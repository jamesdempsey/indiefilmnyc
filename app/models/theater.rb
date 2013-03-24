class Theater < ActiveRecord::Base
  attr_accessible :name, :url

  has_many :showings
  has_many :films, through: :showings, uniq: true
end
