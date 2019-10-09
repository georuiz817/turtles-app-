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

  
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_turtle
      @turtle = Turtle.find_by_id(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def turtle_params
      params.require(:turtle).permit(:name, :content, :color, :content)
    end
end
