class Pizza {
    static all = [];
  
    constructor(size,style,topping,turtle, id) {
        this.size = size;
        this.style = style;
        this.topping = topping;
        this.turtle = turtle;
        this.id = id;
        Pizza.all.push(this);
      }

      // create function to add to the innerHTML of the pizza-list
      template() {
        let li = document.createElement("li")
        li.setAttribute("class", "pizza-li")
        li.setAttribute("id", `${this.id}`)
        li.innerHTML = `${this.turtle.name}` + " was fed a " + `${this.size}` + " " + `${this.style}` + " pizza with " + `${this.topping}!`
        
        let deleteBtn = document.createElement("i")
        deleteBtn.setAttribute("class", "fas fa-trash")
        deleteBtn.addEventListener("click", event => this.deletePizzaHandler(event, this))
        li.append(deleteBtn)
        pizzaCollection.append(li)
      }
      //

  

      deletePizzaHandler(){
        event.preventDefault()
        fetch(Api.baseUrl + '/api/pizzas/' + `${this.id}`, {
          method: "DELETE" 
        })
        .then(() => {
          document.getElementById(`${this.id}`).remove()
          Pizza.all = Pizza.all.filter(pizza => pizza.id !== this.id)
          // setting pizza.all to all the pizzas that don't this id
        })

      }
     
      
     /* display() {
      let pizzaCollection = document.getElementsByClassName("pizza-list")[0].innerHTML += this.template();
      }*/


      static renderAllPizzas() {
        Pizza.all.forEach(pizza => pizza.template())
      }

    }