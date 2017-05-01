class Api::PostsController < ApplicationController
  def index
    posts = Hash[Post.all.map { |p| [p.url_name, p] }]
    order = Post.all.order(:created_at).pluck(:url_name)
    render json: { allPosts: posts, names: order }
  end
end
