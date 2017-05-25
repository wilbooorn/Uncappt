class CreateLikes < ActiveRecord::Migration[5.0]
  def change
    create_table :likes do |t|
      t.integer :user_id, null: false
      t.integer :checkin_id, null: false
      t.timestamps
    end
    add_index :likes, :user_id
    add_index :likes, :checkin_id
    add_index :likes, [:user_id, :checkin_id], unique: true
  end
end
