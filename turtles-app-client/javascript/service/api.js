class Api {
    static baseUrl = 'http://localhost:3000'
  
    //getting info from our back end
    static getBlogs() {
      fetch(Api.baseUrl + '/api/pizzas')
        .then(resp => resp.json())
        .then(pizzas => {
          pizzas.forEach(pizza => {
            let turtle = Turtle.findOrCreate(pizza.turtle.name);
            let newPizza = new Pizza(pizza.size, turtle, pizza.style, pizza.topping);
          })
          Pizza.renderAll();
        })
        .catch(errors => console.log('d', errors))
    }
  
    // sending info to our back end to store 
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
          let pizza = new Pizza(pizza.size, turtle, pizza.style, pizza.topping);
          pizza.display();
        })
    }
  
  }