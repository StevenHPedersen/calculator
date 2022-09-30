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
    });
  });

  operators.forEach((button) => {
    let value = button.dataset.value;
    button.addEventListener('click', () => {
      console.log(value);
    })
  })
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