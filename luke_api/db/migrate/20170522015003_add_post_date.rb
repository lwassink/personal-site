class AddPostDate < ActiveRecord::Migration[5.0]
  def change
    add_column :posts, :date, :datetime
  end
end
