Rails.application.routes.draw do
  
  root 'home#homepage'

  get 'home' => 'home#index'
  
  devise_for :users

  mount HowTo::Engine => "/answers"
  
end
