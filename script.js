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

let displayValue = 0;
let result = 0;

let num1 = 0;

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

// function to begin equation. Assigns numbers to the display.
function startEquation(num) {
  workingTree.textContent += num;
  displayValue = parseInt(workingTree.textContent);
  console.log(workingTree.textContent);
};



//Start of eventListeners//
one.addEventListener('click', () => {
  startEquation(1);
});

two.addEventListener('click', () => {
  startEquation(2);
});

three.addEventListener('click', () => {
  startEquation(3);
});

four.addEventListener('click', () => {
  startEquation(4);
});

five.addEventListener('click', () => {
  startEquation(5);
});

six.addEventListener('click', () => {
  startEquation(6);
});

seven.addEventListener('click', () => {
  startEquation(7);
});

eight.addEventListener('click', () => {
  startEquation(8);
});

nine.addEventListener('click', () => {
  startEquation(9);
});

zero.addEventListener('click', () => {
  startEquation(0);
});

equals.addEventListener('click', () => {
  operate();
});

clear.addEventListener('click', () => {
  clearAll();
});

add.addEventListener('click', () => {
  num1 += displayValue;
  displayValue = 0;
  console.log(num1);
  workingTree.textContent = num1 + ' + ';
});

subtract.addEventListener('click', () => {

});

multiply.addEventListener('click', () => {

});

divide.addEventListener('click', () => {

});
//End of eventListeners//
