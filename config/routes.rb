Rails.application.routes.draw do
  
  get 'rockpaperscissors' => 'rockpaperscissors#index'

  root 'home#homepage'
  
  devise_for :users

  mount HowTo::Engine => "/answers"
  
end
