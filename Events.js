// EVENTS and DOM'S

let mylist = [];


// EVENT - CLICK ------------------------------------------------------

// Define the event function - Função
function handleClick(event) {
  console.log('Button clicked!');
  console.log('Event:', event);
}

// Active the listener AFTER the HTML loads
document.addEventListener('DOMContentLoaded', function() {
  // Selector
  const button = document.getElementById('myButton');
  // Atach the event listener to the button - Quando ativar a função
  button.addEventListener('click', handleClick);  // event : 'click'
});

// EVENT - MOUSE OVER ------------------------------------------------------

// Define the event handler function
function handleMouseOver(event) {
  console.log('Mouse over the element!');
  console.log('Event:', event);
}

// Active the listener AFTER the HTML loads
document.addEventListener('DOMContentLoaded', function() {
  // Selector
  const element = document.getElementById('myOver');
  // Attach the event listener to the element
  element.addEventListener('mouseover', handleMouseOver); // event : 'mouseover'
});

// EVENT - KEYUP -----------------------------------------------------------

// Function to handle Event
function handleKeyUp(event){
  console.log("Key Pressed : " + event.keyCode);
}

// Active the listener AFTER the HTML loads
document.addEventListener('DOMContentLoaded', function(){
  // Attach the event listener to the ENTIRE page
  document.addEventListener('keyup', handleKeyUp);
});

// EVENT - INPUT - CLEAR INPUT ---------------------------------------------

// Function to handle Event
function handleSubmit(event){
  const userInput = document.getElementById('userInput');
  const ul = document.getElementById('uList');
  mylist.push(userInput.value);
  console.log("User Input : " + userInput.value);
  console.log("List : " + mylist) // Ou print assim ou Itera por cada item
  // Innter HTML = Converte código para HTML
  // Ou seja, essa linha adiciona um <li> na UL
  ul.innerHTML += "<li>" + userInput.value + "</li>";
  // Clear the Input Field
  userInput.value = "";
}

// 
document.addEventListener('DOMContentLoaded', function(){
  // Selector
  const saveButton = document.getElementById('saveButton');
  // Attach the evenet Listner to the save Button
  saveButton.addEventListener('click', handleSubmit);
})

// EVENT - Make Something Appear ------------------------------------------

// Function to handle Event
function handleSecret(event){
  const secretDiv = document.getElementById('secretDiv');
  // Add a H1 to the "secretText" div
  secretDiv.innerHTML = "<h1> Ohhh Ma Gah ! </h1>";
}

// 
document.addEventListener('DOMContentLoaded', function(){
  // Selector
  const secretButton = document.getElementById('secretButton');
  // Attach the evenet Listner to the Secret Button
  secretButton.addEventListener('click', handleSecret);
})

// EVENT - ANOTHER INETERESTING WAY OF DOING IT ---------------------------

/*

// Dessa forma podemos usar parâmetros nas funções Handle

function handleSecret( PARÂMETROS ){
  const secretDiv = document.getElementById('secretDiv');
  // Add a H1 to the "secretText" div
  secretDiv.innerHTML = "<h1> Ohhh Ma Gah ! </h1>";
}

document.addEventListener('DOMContentLoaded', function(){
  const secretButton = document.getElementById('secretButton');
  secretButton.addEventListener('click', function(){
    handleSecret( PARÂMETROS );
  });
})

*/