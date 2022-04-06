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

//simple math operator functions.
function add(x, y) {
    return x + y;
};

function subtract(x, y) {
    return x - y;
};

function multiply(x, y) {
    return x * y;
};

function divide(x, y) {
    return x / y;
};

//function to take two numbers and apply an operand to them.
function operate(x, y, operand) {
    switch(operand){
        case '+' : return add(x, y)
          break;
        case '-': return subtract(x, y)
          break;
        case 'x': return multiply(x, y)
          break;
        case '/': return divide(x, y)
          break;
    }
}

