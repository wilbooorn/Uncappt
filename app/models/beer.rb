class Beer < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :brewery, :description, :abv, :ibu, :style, presence: true
end
