Rails.application.routes.draw do
  resources :assessments
  resources :students
  resources :technical_mentors
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
