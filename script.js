// Previous code was all written in the Global scope. 
// Began organizing the code the putting functions within the correct scopes

// First attempt at the calculator was messy, but achieved what I set out to accomplish.

const calculator = (() => {
  //Return functions for simple math equations(+ - / x)
  const Math = (() => {
    function addition(x, y){
      return x + y;
    };

    function subtraction(x, y){
      return x - y;
    };

    function multiplication(x, y){
      return x * y;
    };

    function division(x, y){
      return (y == 0) ? divideByZero() : (x / y);
    };

    return {addition, 
            subtraction, 
            multiplication, 
            division};
  })();

  const values = document.querySelectorAll('.value');
  const operators = document.querySelectorAll('.operator');

  const displayController = (() => {
    const result = document.getElementById('result');
    const workingTree = document.getElementById('working-tree');

    function displayNumber(value){
      result.textContent == '0' ? result.textContent = `${value}` : result.textContent += `${value}`
      let numberValue = 
    };   

    return {
      displayNumber
    };
  })();

  let storedNumber = false;
  let newNumber = false;
  let result = false;
  let operand = false;

  values.forEach((button) => {
    let value = button.dataset.value;
    button.addEventListener('click', () => {
      displayController.displayNumber(value);
      storedNumber = parseInt();
      console.log(storedNumber);
    });
  });

  operators.forEach((button) => {
    operand = button.dataset.value;
    button.addEventListener('click', () => {
      
    });
  });
})();

// function getNumber(string){
//   number = parseInt(string);
//   if(!storedNumber)
// }


function operate(x, y, operand){
  x = parseInt(x);
  y = parseInt(y);
  switch(operand){
    case 'add': return addition(x, y)
    break;
    case 'minus': return subtraction(x, y)
    break;
    case 'multiply': return multiplication(x, y)
    break;
    case 'divide': return division(x, y)
    break;
  };
};