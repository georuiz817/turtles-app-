class Pizza {
    static all = [];

    constructor(size,style,topping) {
        this.size = size;
        this.style = style;
        this.topping = topping;
        Pizza.all.push(this);
      }

      // create function to add to the innerHTML of the pizza-list
      template() {
        return ` <ul id="pizza-list"><li>Mikey ate a ${this.size} ${this.style} pizza with ${this.topping}..Cowabunga!!</li></ul>`
      }

      display() {
        document.getElementsByClassName("pizza-list")[0].innerHTML += this.template();
      }


      static renderAllPizzas() {
        Pizza.all.forEach(pizza => pizza.display())
      }


}