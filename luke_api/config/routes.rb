Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :projects, only: [:index]
    resources :posts, only: [:index, :show]
  end
end
