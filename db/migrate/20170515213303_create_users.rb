class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :location
      t.string :fname, null: false
      t.string :lname, null: false
      t.text :about
      t.string :image_url

      t.timestamps
    end
    add_index :users, :username, unique: true
    add_index :users, :session_token, unique: true

  end
end
