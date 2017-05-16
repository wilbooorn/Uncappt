class RemoveSomeUserRows < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :fname
    remove_column :users, :lname
    remove_column :users, :about
  end
end
