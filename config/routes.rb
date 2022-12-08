Rails.application.routes.draw do
  resources :questions, only: [:index, :show, :create, :update, :destroy]
  resources :assessments, only: [:index, :show, :create, :update, :destroy]
  resources :students, only: [:index, :show, :create, :update, :destroy]
  resources :technical_mentors, only: [:index, :show, :create, :update, :destroy]
  resources :feedbacks, only: [:index, :show, :create, :update, :destroy]


  # userr route
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create]
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
