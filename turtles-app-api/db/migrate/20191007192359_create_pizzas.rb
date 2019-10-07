class CreatePizzas < ActiveRecord::Migration[6.0]
  def change
    create_table :pizzas do |t|
      t.string :size
      t.string :style
      t.string :topping
      t.belongs_to :turtle, null: false, foreign_key: true

      t.timestamps
    end
  end
end
