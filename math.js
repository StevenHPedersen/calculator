
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
        case 'x': return multiplication(x, y)
          break;
        case '/': return division(x, y)
          break;
    };
};
