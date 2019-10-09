//dom 
document.addEventListener('DOMContentLoaded', function(){
  document.querySelector('form').addEventListener('submit', createPizza);
  loadPizzas();
})


//base url and any other globals 
let BASE_URL = 'http://localhost:3000'


//functions to manage pizza 
function createPizzas(e){
e.preventDefault(); 
let size = document.getElementById('size').value;
let style = documentgetElementById('style').value;
let topping = document.getElementById('topping').value;
let ul = document.getElementById('pizza-list');

let data = {
  pizza: {
    size: size,
    style: style,
    topping: topping 
  }
}
fetch(BASE_URL + '/pizzas', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data)
})
then(response => response.json())
.then(pizza =>{
  ul.innerHTML += (`<li>${pizza.size} - ${pizza.style} - ${pizza.topping}</li>`)
})
}

function loadPizzas(){
let ul = document.getElementById('pizza-list');
//com with rails server
fetch(BASE_URL + '/pizzas')
.then(response => response.json())
.then(pizzas => {
  pizzas.forEach(pizza =>   ul.innerHTML += `<li>${pizza.size} - ${pizza.style} - ${pizza.topping}</li>`)
})
}


//functions to manage turtles 