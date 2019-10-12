class Api {
    static baseUrl = 'http://localhost:3000'
  // pizzas are being grabbed, however page not generating the pizas until i refresh 
    static getPizzas() {
      fetch(Api.baseUrl + '/api/pizzas/')
        .then(resp => resp.json())
        .then(pizzas => {
          pizzas.forEach(pizza => {
            let newPizza = new Pizza(pizza.size, pizza.style, pizza.topping);
          })
          Pizza.renderAllPizzas();
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
         let turtle = Turtle.findOrCreate(data.field.name)
         let pizza = new Pizza(data.size, data.style, data.topping);
         pizza.display();
        })
        clearForm()
    }
  
  }


