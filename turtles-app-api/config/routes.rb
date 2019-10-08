Rails.application.routes.draw do
scope :api do
  resources :pizzas, except: [:edit,:new]
  resources :turtles, except: [:edit,:new]
end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
