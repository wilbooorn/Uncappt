class CreateCheckins < ActiveRecord::Migration[5.0]
  def change
    create_table :checkins do |t|
      t.integer :user_id, null: false
      t.integer :beer_id, null: false
      t.float :rating, null: false
      t.string :location
      t.text :review, null: false
      t.string :image_url
      t.timestamps
    end
    add_index :checkins, :user_id
    add_index :checkins, :beer_id
  end
end
