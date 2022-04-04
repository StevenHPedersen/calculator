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
        case '+': return add(x, y)
            break;
        case '-': return subtract(x, y)
            break;
        case 'x': return multiply(x, y)
            break;
        case '/': return divide(x, y)
            break;
    }
}

console.log(operate(2, 18, 'x'));
//