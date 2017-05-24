Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:new, :show, :create, :update]
    resource :session, only: [:new, :create, :destroy]
    resources :beers
    resources :images, only: [:index, :create]
    resources :checkins
  end
end
