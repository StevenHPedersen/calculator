import { operate } from Math;
import { updateDisplay } from displayController;

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
  currentNumber =+ value;
	updateDisplay(null, currentNumber);
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
	updateDisplay()
}

function equal() {
  if(result) {
    savedNumber = result;
  }
  result = operate(savedNumber, operand, currentNumber);
	updateDisplay()
}
