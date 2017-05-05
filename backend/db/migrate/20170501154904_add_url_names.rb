class AddUrlNames < ActiveRecord::Migration[5.0]
  def change
    add_column :posts, :url_name, :string, null: false
    add_index :posts, :url_name, unique: true
  end
end
