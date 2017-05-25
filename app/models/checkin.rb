class Checkin < ApplicationRecord
  validates :beer_id, :user_id, :rating, :review, presence: true
  validates :rating, inclusion: { in: [1, 2, 3, 4, 5],
                                  message: "not valid" }
  belongs_to :user
  belongs_to :beer
  has_many :likes

  after_save :calculate_average!

  def calculate_average!
    num = self.beer.checkins.length
    sum = 0.0
    self.beer.checkins.each { |checkin| sum += checkin.rating }
    self.beer.rating = (sum / num).round(2)
    self.beer.save
  end
end
