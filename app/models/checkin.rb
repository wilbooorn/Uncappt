class Checkin < ApplicationRecord
  validates :beer_id, :user_id, :rating, :review, presence: true

  belongs_to :user
  belongs_to :beer
end
