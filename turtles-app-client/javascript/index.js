//dom
document.addEventListener('DOMContentLoaded', function () {
  addSubmitEventToPizza();
  Api.getPizzas();
});



//functions
function createData() {
  return {
    pizza: {
      size: document.getElementById('size').value,
      style: document.getElementById('style').value,
      topping: document.getElementById('topping').value,
    },
    turtle: {
      name: document.getElementById('name').value
    }
  }
}

function clearForm() {
  document.getElementById("size").value = ""
  document.getElementById("style").value = ""
  document.getElementById("topping").value = ""
}




//events 
function addSubmitEventToPizza() {
  document.getElementById("pizza-form").addEventListener('submit', Api.submitPizza);
}


