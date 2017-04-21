class Api::PostsController < ApplicationController
  def index
    posts = Hash[Post.all.map { |p| [p.id, p] }]
    order = Post.all.order(:created_at).pluck(:id)
    render json: { allPosts: posts, ids: order }
  end
end
