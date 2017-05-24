class Beer < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :brewery, :description, :abv, :ibu, :style, presence: true

  has_many :checkins, dependent: :destroy
  include PgSearch
  pg_search_scope :search_by_name, against: [:name, :brewery]
end
