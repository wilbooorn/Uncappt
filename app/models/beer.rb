class Beer < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :brewery, :description, :abv, :ibu, :style, presence: true
  validates :style, inclusion: { in: %w(Ale Lager IPA Stout Pilsner Wheat Porter Blonde Other),
                                 message: "Not a valid beer style." }
end
