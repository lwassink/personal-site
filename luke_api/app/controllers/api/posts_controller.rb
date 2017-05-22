class Api::PostsController < ApplicationController
  def index
    posts = Hash[Post.all.map { |p| [p.url_name, p] }]
    order = Post.all.order(:date).pluck(:url_name).reverse
    render json: { allPosts: posts, names: order }
  end
end
