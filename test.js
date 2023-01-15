// import { operate } from Math;
// import { updateDisplay } from displayController;

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
	if(y === 0) {
		return undefined
	}
  return x / y;
};

//function to take two numbers and apply an operand to them.
export default function operate(x, y, operand){
  x = parseInt(x);
  y = parseInt(y);
    switch(operand){
        case '+' : return addition(x, y)
          break;
        case '-': return subtraction(x, y)
          break;
        case '*': return multiplication(x, y)
          break;
        case '/': return division(x, y)
          break;
    };
};

const main_display = document.getElementById('main-display')
const tree_display = document.getElementById('tree-display')

let currentNumber = '';
let savedNumber = '';
let operand = '';
let result = '';

function resetNumbers() {
  savedNumber = '';
  currentNumber = '';
  operand = '';
  result = '';
}

function number(value) {
  if(result) {
    resetNumbers();
  }
  currentNumber += value;
	main_display.textContent = currentNumber;
}

function operator(value) { 
  if(!result) {
    if(savedNumber) {
      savedNumber = operate(savedNumber, operand, currentNumber);
    } else {
      savedNumber = currentNumber;
    }
  } else {
    savedNumber = result;
    result = '';
  }
  currentNumber = '';
  operand = value;
	main_display.textContent = '';
	tree_display.textContent = `${savedNumber} ${operand} `
}

function equal() {
  if(result) {
    savedNumber = result;
  }
  result = operate(savedNumber, operand, currentNumber);
	main_display.textContent = result;
	tree_display.textContent = `${savedNumber} ${operand} ${currentNumber}`
}

function getButtons(){
	let btn_1 = document.getElementById('one');
	let btn_2 = document.getElementById('two');
	let btn_3 = document.getElementById('three');
	let btn_4 = document.getElementById('four');
	let btn_5 = document.getElementById('five');
	let btn_6 = document.getElementById('six');
	let btn_7 = document.getElementById('seven');
	let btn_8 = document.getElementById('eight');
	let btn_9 = document.getElementById('nine');
	let btn_0 = document.getElementById('zero');
	let btn_plus = document.getElementById('plus');
	let btn_sub = document.getElementById('sub');
	let btn_mul = document.getElementById('mul');
	let btn_div = document.getElementById('div');
	let btn_equal = document.getElementById('equal');
	return;
}
getButtons();


btn_1.addEventListener('click', () => {
	number(1);
})

btn_2.addEventListener('click', () => {
	number(2);
})

btn_3.addEventListener('click', () => {
	number(3);
})

btn_4.addEventListener('click', () => {
	number(4);
})

btn_5.addEventListener('click', () => {
	number(5);
})

btn_6.addEventListener('click', () => {
	number(6);
})

btn_7.addEventListener('click', () => {
	number(7);
})

btn_8.addEventListener('click', () => {
	number(8);
})

btn_9.addEventListener('click', () => {
	number(9);
})

btn_0.addEventListener('click', () => {
	number(0);
})

btn_plus.addEventListener('click', () => {
	operator('+');
})

btn_sub.addEventListener('click', () => {
	operator('-');
})

btn_mul.addEventListener('click', () => {
	operator('*');
})

btn_div.addEventListener('click', () => {
	operator('/');
})

btn_equal.addEventListener('click', () => {
	equal()
})



