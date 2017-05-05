class Post < ApplicationRecord
  validates :title, :url_name, presence: true
end
