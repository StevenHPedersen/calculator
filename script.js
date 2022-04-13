const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const equals = document.getElementById('equals');
const decimal = document.getElementById('decimal');
const clear = document.getElementById('clear');
const workingTree = document.getElementById('working-tree');
const result_div = document.getElementById('result');

let displayValue = '';
let num1 = '';
let result = '';
let operand = '';

//simple math operator functions.
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
  return x / y;
};

//function to take two numbers and apply an operand to them.
function operate(x, y, operand){
  x = parseInt(x);
  y = parseInt(y);
    switch(operand){
        case '+' : return addition(x, y)
          break;
        case '-': return subtraction(x, y)
          break;
        case 'x': return multiplication(x, y)
          break;
        case '/': return division(x, y)
          break;
    };
};

// Function to reset num1 and display values to continue equations.
function resetNumbers(){
  num1 = '';
  displayValue = '';
  operand = '';
};

// Function to grab the numbers chosen.
function getNumber(btn){
  switch(result != ''){
    case true:
      resetNumbers();
      result = '';
      break;      
    case false:
      break;
  };
  displayValue += btn;
  workingTree.textContent = displayValue;
};

// Function to reset all values to zero or empty for the next equation.
function clearAll(){
  resetNumbers();
  result = '';
  workingTree.textContent = '';
  result_div.textContent = 0;
};

function emptyResult(){
  if(num1 == ''){
    num1 = displayValue;
  } else {
    num1 = operate(num1, displayValue, operand);
  };
  displayValue = '';
};

function withResult(){
  num1 = String(result);
  result = '';
};
//calls equation functions depending on the result variable.
function equation(operator){
  if(result == ''){
    emptyResult();
  } else {
    withResult();
  };
  operand = operator;
};

// Determines solution to equation.
function getResult(){
  if(num1 == '' || displayValue == '' || operand == '' ){
    return;
  } else {
    result = operate(num1, displayValue, operand); 
    resetNumbers();    
  };
};

//Start of eventListeners//
one.addEventListener('click', () => {
  getNumber(1);
});

two.addEventListener('click', () => {
  getNumber(2);
});

three.addEventListener('click', () => {
  getNumber(3);
});

four.addEventListener('click', () => {
  getNumber(4);
});

five.addEventListener('click', () => {
  getNumber(5);
});

six.addEventListener('click', () => {
  getNumber(6);
});

seven.addEventListener('click', () => {
  getNumber(7);
});

eight.addEventListener('click', () => {
  getNumber(8);
});

nine.addEventListener('click', () => {
  getNumber(9);
});

zero.addEventListener('click', () => {
  getNumber(0);
});

equals.addEventListener('click', () => {
  operate();
});

clear.addEventListener('click', () => {
  clearAll();
});

add.addEventListener('click', () => {
  equation('+');
});

subtract.addEventListener('click', () => {
  equation('-');
});

multiply.addEventListener('click', () => {
  equation('x');
});

divide.addEventListener('click', () => {
  equation('/');
});
//End of eventListeners//