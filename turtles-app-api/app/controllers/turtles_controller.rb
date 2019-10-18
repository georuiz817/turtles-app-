class TurtlesController < ApplicationController
  before_action :set_turtle, only: [:show, :update, :destroy]

  # GET /turtles
  def index
    @turtles = Turtle.all

    render json: @turtles
  end

  # GET /turtles/1
  def show
    render json: @turtle
  end

  # POST /turtles
  def create
    @turtle = Turtle.new(turtle_params)

    if @turtle.save
      render json: @turtle, status: :created, location: @turtle
    else
      render json: @turtle.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /turtles/1
  def update
    if @turtle.update(turtle_params)
      render json: @turtle
    else
      render json: @turtle.errors, status: :unprocessable_entity
    end
  end

  # DELETE /turtles/1
  def destroy
    @turtle.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_turtle
      @turtle = Turtle.find_by_id(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def turtle_params
      params.require(:turtle).permit(:name, :color)
    end
end