class Turtle < ApplicationRecord
 has_many :pizzas 
 validates_presence_of :name, :color 
  
end
