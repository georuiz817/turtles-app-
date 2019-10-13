class Api {
    static baseUrl = 'http://localhost:3000'
  // pizzas are being grabbed, however page not generating the pizas until i refresh 
    static getPizzas() {
      event.preventDefault();
      fetch(Api.baseUrl + '/api/pizzas/')
        .then(resp => resp.json())
        .then(pizzas => {
          pizzas.forEach(pizza => {
            let newPizza = new Pizza(pizza.size, pizza.style, pizza.topping, pizza.turtle_id);
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
            let newTurtle = new Turtle(turtle.name);
          })
         })
        .catch(errors => console.log('d', errors))
      }

  
    //submit is good, pizza is being sent to backend and created with a belongs to association
    //need to get getting data from the backend working
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
         let pizza = new Pizza(data.size, data.style, data.topping, data.turtle_id);
         pizza.display();
        })
        clearPizzaForm()
    }
  
  }


