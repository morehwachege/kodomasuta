Rails.application.routes.draw do
  resources :questions, only: [:index, :show, :create, :update, :destroy]
  resources :assessments, only: [:index, :show, :create, :update, :destroy]
  resources :students, only: [:index, :show, :create, :update, :destroy]
  resources :technical_mentors, only: [:index, :show, :create, :update, :destroy]
  resources :feedbacks, only: [:index, :show, :create, :update, :destroy]
  resources :student_assessments, only: [:index, :show, :create, :update, :destroy]

# login signup
  post 'register', to: 'users#create'
  post 'login', to: 'auth#create'
  get 'profile', to: 'users#profile'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
