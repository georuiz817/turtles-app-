class PizzasController < ApplicationController
  before_action :set_pizza, only: [:show, :update, :destroy]
  def index
      @pizzas = Pizza.all
      render json: @pizzas, include: [:turtle]
  end

  def show
      render json: @pizza,  include: [:turtle]
    end
  
    def create
      @pizza = Pizza.new(pizza_params)
      
      if @pizza.save
        render json: @pizza, include: [:turtle], status: :created, location: @pizza
      else
        render json: @pizza.errors, status: :unprocessable_entity
      end
    end
  
    def update
      if @pizza.update(pizza_params)
        render json: @pizza
      else
        render json: @pizza.errors, status: :unprocessable_entity
      end
    end

    def destroy
      pizza = Pizza.find(params[:id])
      @pizza.destroy
      render json: @pizza
    end
  
    private
      def set_pizza
        @pizza = Pizza.find_by_id(params[:id])
      end
  
      def turtle_params
        params.require(:turtle).permit(:name)
      end
  
      def pizza_params
        params.require(:pizza).permit(:size, :style, :topping, :turtle_id)
      end

   end