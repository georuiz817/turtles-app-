//dom content loaded 
//document.addEventListener('DOMContentLoaded', function(){
//addSubmitEvent
//});

//events 

//create and return a pizza object
//let createPizza 


function createPizza() {
    return {
      pizza: {
        size: document.getElementById('size').value,
        style: document.getElementById('style').value,
        topping: document.getElementById('topping').value
      },
      Turtle: {
        name: document.getElementById('author').value
      }
    }
  }
  
  function clearForm() {
    document.getElementById("title").value = ""
    document.getElementById("author").value = ""
    document.getElementById("content").value = ""
  }

//display pizza in a UL 
//let displayPizza

//prevent default 
//create pizza
// display the pizza
//let submitPizza 


//let addSubmitEvent = () => {document.getElementById("pizza-form").addEventListener('submit, Api.submitForm')};

