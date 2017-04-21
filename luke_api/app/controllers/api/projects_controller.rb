class Api::ProjectsController < ApplicationController
  def index
    projects = Hash[Project.all.map { |p| [p.id, p] }]
    order = Project.all.order(:created_at).pluck(:id)
    render json: { allProjects: projects, ids: order }
  end
end
