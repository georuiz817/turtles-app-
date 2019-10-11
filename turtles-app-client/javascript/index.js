//dom 
// upon dom being loaded we will load the addsubmtevent to pizza, and we will get the list of all pizzas
document.addEventListener('DOMContentLoaded', function () {
  addSubmitEventToPizza();
  Api.getPizzas();
});



//functions

// this is creating a pizza object via what is typed into the pizza form
function createData() {
  return {
    pizza: {
      size: document.getElementById('size').value,
      style: document.getElementById('style').value,
      topping: document.getElementById('topping').value,
    },
  }
}

// this will clear the pizza form values and set them to empty 
function clearForm() {
  document.getElementById("size").value = ""
  document.getElementById("style").value = ""
  document.getElementById("topping").value = ""
}




//events 

// this is adding a submit event to the pizza form, and will invoke the submit pizza button upon submit
function addSubmitEventToPizza() {
  document.getElementById("pizza-form").addEventListener('submit', Api.submitPizza);
}


