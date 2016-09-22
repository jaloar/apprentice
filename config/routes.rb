Rails.application.routes.draw do
  
  resources :answers

  get 'answers' => 'answers#index'

  root 'home#homepage'

  get 'homepage' => 'home#homepage'

  get 'home' => 'home#index'

  get 'rps' => 'rockpaperscissors#index'
  
  devise_for :users

  # mount HowTo::Engine => '/answers'
  
end
