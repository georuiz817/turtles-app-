//dom content loaded 
//document.addEventListener('DOMContentLoaded', function(){
//addSubmitEvent
//});

//events 

//create and return a pizza object
function createPizza() {
    return {
      pizza: {
        size: document.getElementById('size').value,
        style: document.getElementById('style').value,
        topping: document.getElementById('topping').value
      },
    }
  }
  
  
  function clearForm() {
    document.getElementById("size").value = ""
    document.getElementById("style").value = ""
    document.getElementById("topping").value = ""
  }



  function pizzaSubmit() {
    document.getElementById("pizza-form").addEventListener('submit', Api.pizzaSubmit);
  }


