class Api {
    static baseUrl = 'http://localhost:3000'
  
    static getPizzas() {
      fetch(Api.baseUrl + '/api/pizzas')
        .then(resp => resp.json())
        .then(pizzas => {
          pizzas.forEach(pizza => {
            let newPizza = new Pizza(pizza.style, pizza.size, pizza.topping);
          })
          Pizza.renderAllPizzas();
        })
        .catch(errors => console.log('d', errors))
    }
  
    static submitPizza(event) {
      event.preventDefault();
      let data = createData();
      fetch(Api.baseUrl + '/api/pizzas', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(data => {
          let turtle = Turtle.findOrCreate(data.turtle.name);
          let pizza = new Pizza(data.pizza.size, data.pizza.style, data.pizza.topping);
          pizza.display();
        })
    }
  
  }