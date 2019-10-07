class Pizza < ApplicationRecord
  belongs_to :turtle
  validates_presence_of :size, :style, :topping 
  
end
