class Checkin < ApplicationRecord
  validates :beer_id, :user_id, :rating, :review, presence: true
  validates :rating, inclusion: { in: [1, 2, 3, 4, 5],
                                  message: "not valid" }
  belongs_to :user
  belongs_to :beer
end
