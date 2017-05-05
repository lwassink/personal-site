class CreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.string :title, null: false, unique: true
      t.text :description
      t.string :site_url
      t.string :github_url
      t.string :technologies
      t.timestamps
    end
  end
end
