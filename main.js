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
function operate(x, y, operand){
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

//display controller functions
const updateDisplay = () => {
	let main_display = document.getElementById('display-main');
	let tree_display = document.getElementById('display-tree');

	return {
		main: (number) => { // Changes the main display to show selected number;
			main_display.textContent = number;
		},

		tree: (number, symbol) => { // Changes the working tree display to show current equation variables;
			tree_display.textContent = `${number} ${symbol} `;
		}
	}
}

let currentNumber = '';
let savedNumber = '';
let operand = '';
let result = '';

// Allows for quick view at saved variables
function consoleLogValues() {
	console.log('saved: ' + savedNumber);
	console.log('operand: ' + operand);
	console.log('current: ' + currentNumber);
	console.log('result: ' + result);
}

function resetValues() {
	currentNumber = '';
	savedNumber = '';
	operand = '';
	result = '';
}

function number(value) {
	if(result) {
		resetValues();
	}
	currentNumber += value;
}

// Would like to factor down, at some point. Seems like too many if/else's.
function operator(value) {
	if(currentNumber) {
		if(result) {
			savedNumber = result;
			result = '';
		} else {
			if(savedNumber) {
				savedNumber = operate(savedNumber, currentNumber, operand);
		} else {
			savedNumber = currentNumber;
		}
	}
	currentNumber = '';
	operand = value;
	} else { return }
}

function equal() {
	if(result) {
		savedNumber = result;
	}
	result = operate(savedNumber, currentNumber, operand);
}
