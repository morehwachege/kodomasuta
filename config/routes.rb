Rails.application.routes.draw do
  resources :questions, only: [:index, :show, :create]
  resources :assessments, only: [:index, :show, :create]
  resources :students, only: [:index, :show, :create]
  resources :technical_mentors, only: [:index, :show, :create]
  resources :feedbacks, only: [:index, :show, :create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
