Rails.application.routes.draw do
  resources :questions, only: [:index, :show, :create, :update, :destroy]
  resources :assessments, only: [:index, :show, :create, :update, :destroy]
  resources :students, only: [:index, :show, :create, :update, :destroy]
  resources :technical_mentors, only: [:index, :show, :create, :update, :destroy]
  resources :feedbacks, only: [:index, :show, :create, :update, :destroy]
<<<<<<< HEAD
  resources :student_assessments, only: [:index, :show, :create, :update, :destroy]

=======


  # userr route
  # namespace :api do
  #   namespace :v1 do
  #     resources :users, only: [:create]
  #     post '/login', to: 'auth#create'
  #     get '/profile', to: 'users#profile'
  #   end
  # end
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
>>>>>>> 7cb46144de8c30c5868c9c0b562909c08944c11c
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
