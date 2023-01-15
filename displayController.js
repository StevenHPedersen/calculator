
export default function updateDisplay(value, symbol, resultValue) {
	let main_display = document.getElementById(display-main);
	let working_tree = document.getElementById(display-tree);

	if(resultValue) {
		main_display.textContent = resultValue;
	} else {
		main_display.textContent = value
	}
	
}

function showCurrentNumber(value){
	main_display.textContent = value;
}

function operatorUpdateDisplay(value, symbol){
	main_display.textContent = '';
	tree_display.textContent = `${value} ${symbol} `
}

function equalUpdateDisplay(value, symbol, resultValue){
	main_display.textContent = resultValue;
	tree_display.textContent = `${value} ${symbol}`
}

/*the only thing that really makes a differnece in what's being diplayed
is the equal button. otherwise, the tree will have nothing or a number and a symbol
i.e. 2 +    or 8 x 

When its a result, the tree will say 2 + 2   or  8 * 7
I hit an operand after thatn, the tree would then be 4 +  or  56 / ... etc*/
