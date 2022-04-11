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
let result = 0;
let operand = '';

//simple math operator functions.
function addition(x, y) {
    return x + y;
};

function subtraction(x, y) {
    return x - y;
};

function multiplication(x, y) {
    return x * y;
};

function division(x, y) {
    return x / y;
};

//function to take two numbers and apply an operand to them.
function operate(x, y, operand) {
    switch(operand){
        case '+' : return addition(x, y)
          break;
        case '-': return subtraction(x, y)
          break;
        case 'x': return multiplication(x, y)
          break;
        case '/': return division(x, y)
          break;
    }
}

// function to reset all values to zero or empty for
// the next equation.
function clearAll() {
  displayValue = 0;
  workingTree.textContent = '';
  result = 0;
  result_div.textContent = 0;
}

// function to collect 1st number in equation.
function getNumber(btn) {
  displayValue += btn; 
  return displayValue;
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
  
});

subtract.addEventListener('click', () => {

});

multiply.addEventListener('click', () => {

});

divide.addEventListener('click', () => {

});
//End of eventListeners//

//I re-wrote some of the code because I
//  think I started off with too much at once.
//Below is a simple version of a working calculator
//   that needs to be applied to all the other operator buttons.



function equation() {
  num1 += displayValue;
  operand = operand;
  displayValue = '';
};

btnTwo.addEventListener('click', () => {
  getNumber(2);
});

btnFour.addEventListener('click', () => {
  getNumber(4);
});

btnPlus.addEventListener('click', () => {  
  operand = '+';
  equation();
});

btnEquals.addEventListener('click', () => {
  num1 = parseInt(num1);
  displayValue = parseInt(displayValue);
  console.log(num1);
  console.log(displayValue);
  console.log(operand);
  result = operate(num1, displayValue, operand);
  console.log(result);    
});

