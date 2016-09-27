Rails.application.routes.draw do
  
  resources :maps

  resources :answers

  get 'answers' => 'answers#index'

  root 'home#homepage'

  get 'homepage' => 'home#homepage'

  get 'home' => 'home#index'

  get 'rps' => 'rockpaperscissors#index'

  get 'maps' => 'maps#index'
  
  devise_for :users

  # mount HowTo::Engine => '/answers'
  
end
