class Like < ApplicationRecord
  validates :user_id, :checkin_id, presence: true
  validates :user_id, uniqueness: { scope: :checkin_id,
    message: "can't like the same post twice" }

  belongs_to :user
  belongs_to :checkin
end
