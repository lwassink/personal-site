class AddShortUrls < ActiveRecord::Migration[5.0]
  def change
    add_column :projects, :short_github_url, :string
    add_column :projects, :short_site_url, :string
  end
end
