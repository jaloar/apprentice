Rails.application.routes.draw do
  
  get 'rockpaperscissors' => 'rockpaperscissors#index'

  get 'home' => 'home#index'

  root 'home#homepage'
  
  devise_for :users

  mount HowTo::Engine => "/answers"
  
end
