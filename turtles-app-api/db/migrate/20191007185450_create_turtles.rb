class CreateTurtles < ActiveRecord::Migration[6.0]
  def change
    create_table :turtles do |t|
      t.string :name
      t.string :color
      t.timestamps
    end
  end
end
