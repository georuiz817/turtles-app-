class Api {
    static baseUrl = 'http://localhost:3000'
  
    static getPizzas() {
      fetch(Api.baseUrl + '/api/pizzas/')
        .then(resp => resp.json())
        .then(pizzas => {
          pizzas.forEach(pizza => {
            let newPizza = new Pizza(pizza.size, pizza.style, pizza.topping, pizza.turtle, pizza.id);
          })
          Pizza.renderAllPizzas();
        })
        .catch(errors => console.log('d', errors))
    }

    
    static getTurtles() {
      fetch(Api.baseUrl + '/api/turtles/')
        .then(resp => resp.json())
        .then(turtles => {
          turtles.forEach(turtle => {
            let newTurtle = new Turtle(turtle.name,turtle.id);
          })
          Turtle.renderAllTurtles();
         })
        .catch(errors => console.log('d', errors))
      }

  

    static submitPizza(event) {
      event.preventDefault();
      let data = createData();
      fetch(Api.baseUrl + '/api/pizzas/', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(data => {
         let pizza = new Pizza(data.size, data.style, data.topping, data.turtle, data.id);
         pizza.display();
        })
        clearPizzaForm()
    }
  
}


