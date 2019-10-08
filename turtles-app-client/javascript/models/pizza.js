class Pizza {
    static all = []

    constructor(size,style,topping) {
        this.size = size;
        this.style = style;
        this.topping = topping;
        Pizza.all.push(this);
      }

    
      template() {
        // create html template to add to the innerHTML of the pizza-list
        return `<li>${this.turtle.name} the ${this.turtle.color} Ninja Turtle ate a ${this.size} ${this.style} pizza with ${this.topping}..Cowabunga!!</li>`
      }

      display() {
        // display pizza details in a ul in the pizza-lists
        document.getElementsByClassName("pizza-lists")[0].innerHTML += this.template();
      }

      static renderAll() {
        Pizza.all.forEach(pizza => pizza.display())
      }


}