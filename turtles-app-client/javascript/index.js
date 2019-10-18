// this is creating a pizza object via what is typed into the pizza form
function createData() {
  return {
    pizza: {
      size: document.getElementById('size').value,
      style: document.getElementById('style').value,
      topping: document.getElementById('topping').value,
      turtle_id: document.getElementById('turtle1').value,
    },
  }
}

// this will clear the pizza form values and set them to empty 
function clearPizzaForm() {
  document.getElementById('size').value = ""
  document.getElementById('style').value = ""
  document.getElementById('topping').value = ""
}



// this is adding a submit event to the pizza form, and will invoke the submit pizza function upon submit
function addSubmitEventToPizza() {
  document.getElementById("pizza-form").addEventListener('submit', Api.submitPizza);
}


//function addDeleteEventToPizza(){
//  document.getElementsByClass("deletePizza").addEventListener('click', Api.deletePizzas)
//}


//dom
document.addEventListener('DOMContentLoaded', function () {
  addSubmitEventToPizza();
  Api.getTurtles();
  Api.getPizzas();
  //Api.deletePizzas();

});
