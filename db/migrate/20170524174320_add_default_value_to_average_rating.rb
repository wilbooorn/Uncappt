class AddDefaultValueToAverageRating < ActiveRecord::Migration[5.0]
  def change
    change_column :beers, :rating, :float, default: 0
  end
end
