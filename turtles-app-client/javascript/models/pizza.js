class Pizza {
    static all = [];

    constructor(size,style,topping) {
        this.size = size;
        this.style = style;
        this.topping = topping;
        Pizza.all.push(this);
      }

      // create function to add to the innerHTML of the pizza-list
      returnPizza() {
        return `Mikey ate a ${this.size} ${this.style} pizza with ${this.topping}..Cowabunga!!</li>`
      }

      display() {
        // display pizza details in a ul in the pizza-lists
        document.getElementById("pizza-list").innerHTML = this.returnPizza();
      }


      static renderAll() {
        Pizza.all.forEach(pizza => pizza.display())
      }


}