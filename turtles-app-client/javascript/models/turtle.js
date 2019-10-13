class Turtle {
    static all = []
  
    constructor(name,id) {
      this.name = name;
      this.id = id
      Turtle.all.push(this);
    }

    pizzas() {
      Pizza.all.filter(pizza => pizza.turtle.name === this.name);
    }
  
    static find(name) {
      return Turtle.all.find(turtle => turtle.name === name);
    }
  
    static findOrCreate(name) {
      let turtle = Turtle.find(name);
      if (turtle) {
        return turtle
      } else {
        return new Turtle(name);
      }
    }

    template() {
      return `<li>${this.name} is turtle ${this.id}</li>`
    }


    turtledisplay() {
      document.getElementsByClassName("allNames")[0].innerHTML += this.template();
    }

    static renderAllTurtles() {
      Turtle.all.forEach(turtle => turtle.turtledisplay())
    }

}