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
        return `<li> ${this.turtle.name} was fed a ${this.size} ${this.style} pizza with ${this.topping}..Cowabunga!!</li> <button data-id="${this.id}" class="deletePizza">Remove</button>`
      }


      display() {
        document.getElementsByClassName("pizza-list")[0].innerHTML += this.template();
      }


      static renderAllPizzas() {
        Pizza.all.forEach(pizza => pizza.display())
      }

  

}