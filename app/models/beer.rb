class Beer < ApplicationRecord
  include PgSearch
  pg_search_scope :search_by_name, against: [:name, :brewery],
                                   using: { tsearch: { prefix: true } }

  validates :name, presence: true, uniqueness: true
  validates :brewery, :description, :abv, :ibu, :style, presence: true

  has_many :checkins, dependent: :destroy


end
