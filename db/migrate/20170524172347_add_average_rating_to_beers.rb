class AddAverageRatingToBeers < ActiveRecord::Migration[5.0]
  def change
    add_column :beers, :rating, :float
  end
end
