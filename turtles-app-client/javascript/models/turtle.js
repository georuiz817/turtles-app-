class Turtle {
    static all = []
  
    constructor(name) {
      this.name = name;
      this.color = color;
      Turtle.all.push(this);
    }

    pizzas() {
      Pizza.all.filter(pizza => Pizza.turtle.name === this.name);
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

}