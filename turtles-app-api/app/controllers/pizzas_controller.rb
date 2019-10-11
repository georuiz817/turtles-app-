class PizzasController < ApplicationController
  def index
      @pizzas = Pizza.all
      render json: @pizzas, include: [:turtle]
  end

  def show
      render json: @pizza
    end
  
    def create
      @turtle = Turtle.find_or_create_by(name: turtle_params[:name])
      @pizza = @turtle.pizzas.build(pizza_params)
     
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
      @pizza.destroy
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