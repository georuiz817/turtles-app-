class PizzasController < ApplicationController
  before_action :set_pizza, only: [:show, :update, :destroy]

  # GET /pizzas
  def index
    @pizzas = Pizza.all

    render json: @pizzas
  end

  # GET /pizzas/1
  def show
    render json: @pizza
  end

  # POST /pizzas
  def create
    @turtle = Turtle.find_or_create_by(name: turtle_params[:name])
    @pizza = @turtle.pizzas.build(pizza_params)

    if @pizza.save
      render json: @pizza, status: :created, location: @pizza
    else
      render json: @pizza.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /pizzas/1
  def update
    if @pizza.update(pizza_params)
      render json: @pizza
    else
      render json: @pizza.errors, status: :unprocessable_entity
    end
  end

  # DELETE /pizzas/1
  def destroy
    @pizza.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_pizza
      @pizza = Pizza.find_by_id(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def pizza_params
      params.require(:pizza).permit(:size, :style, :topping, :turtle_id)
    end
    
    def turtle_params
      params.require(:user).permit(:name)
    end
end
