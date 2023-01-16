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
const updateDisplay = (() => {
	let main_display = document.getElementById('display-main');
	let tree_display = document.getElementById('display-tree');

	return {
		main: (number) => { // Changes the main display to show selected number;
			main_display.textContent = number;
		},

		tree: (number, symbol, number2) => { // Changes the working tree display to show current equation variables;
      if(!number2) {
			tree_display.textContent = `${number} ${symbol} `;
		  } else {
        tree_display.textContent = `${number} ${symbol} ${number2}`;
      }
    },

    reset: () => {
      main_display.textContent = '';
      tree_display.textContent = '';
    }
	}
})();

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
	} else {
    operand = value;
    return;
  }
}

function equal() {
	if(result) {
		savedNumber = result;
	}
	result = operate(savedNumber, currentNumber, operand);
}

// HTML calc button selectors
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
let btn_clear = document.getElementById('clear');
let btn_cAll = document.getElementById('clearAll')

// Number buttons
btn_1.addEventListener('click', () => {
  number(1);
  updateDisplay.main(currentNumber);
})
btn_2.addEventListener('click', () => {
  number(2);
  updateDisplay.main(currentNumber);
})

btn_3.addEventListener('click', () => {
  number(3);
  updateDisplay.main(currentNumber);
})

btn_4.addEventListener('click', () => {
  number(4);
  updateDisplay.main(currentNumber);
})

btn_5.addEventListener('click', () => {
  number(5);
  updateDisplay.main(currentNumber);
})

btn_6.addEventListener('click', () => {
  number(6);
  updateDisplay.main(currentNumber);
})

btn_7.addEventListener('click', () => {
  number(7);
  updateDisplay.main(currentNumber);
})

btn_8.addEventListener('click', () => {
  number(8);
  updateDisplay.main(currentNumber);
})

btn_9.addEventListener('click', () => {
  number(9);
  updateDisplay.main(currentNumber);
})

btn_0.addEventListener('click', () => {
  number(0);
  updateDisplay.main(currentNumber);
})

// Operator buttons
btn_plus.addEventListener('click', () => {
  operator('+');
  updateDisplay.main(savedNumber);
  updateDisplay.tree(savedNumber, operand);
})

btn_sub.addEventListener('click', () => {
  operator('-');
  updateDisplay.main(savedNumber);
  updateDisplay.tree(savedNumber, operand);
})

btn_mul.addEventListener('click', () => {
  operator('*');
  updateDisplay.main(savedNumber);
  updateDisplay.tree(savedNumber, operand);
})

btn_div.addEventListener('click', () => {
  operator('/');
  updateDisplay.main(savedNumber);
  updateDisplay.tree(savedNumber, operand);
})

btn_equal.addEventListener('click', () => {
  equal();
  updateDisplay.main(result);
  updateDisplay.tree(savedNumber, operand, currentNumber);
})

btn_cAll.addEventListener('click', () => {
  resetValues();
  updateDisplay.reset();
})

btn_clear.addEventListener('click', () => {
  currentNumber = '';
  updateDisplay.main(currentNumber);
})