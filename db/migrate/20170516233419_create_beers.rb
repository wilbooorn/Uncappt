class CreateBeers < ActiveRecord::Migration[5.0]
  def change
    create_table :beers do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.string :brewery, null: false
      t.float :abv, null: false
      t.float :ibu, null: false
      t.string :style, null: false
      t.string :image_url
      t.timestamps
    end
    add_index :beers, :name, unique: true
  end
end
