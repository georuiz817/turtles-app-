require 'test_helper'

class TurtlesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @turtle = turtles(:one)
  end

  test "should get index" do
    get turtles_url, as: :json
    assert_response :success
  end

  test "should create turtle" do
    assert_difference('Turtle.count') do
      post turtles_url, params: { turtle: { color: @turtle.color, content: @turtle.content, name: @turtle.name } }, as: :json
    end

    assert_response 201
  end

  test "should show turtle" do
    get turtle_url(@turtle), as: :json
    assert_response :success
  end

  test "should update turtle" do
    patch turtle_url(@turtle), params: { turtle: { color: @turtle.color, content: @turtle.content, name: @turtle.name } }, as: :json
    assert_response 200
  end

  test "should destroy turtle" do
    assert_difference('Turtle.count', -1) do
      delete turtle_url(@turtle), as: :json
    end

    assert_response 204
  end
end
