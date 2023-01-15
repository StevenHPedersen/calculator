
export default function updateDisplay(display, number, symbol) {
	let main_display = document.getElementById(display-main);
	let working_tree = document.getElementById(display-tree);

	switch (display) {
		case result:
			main_display.textContent = `${number}`;
			
			return
			break;
		case tree:
			main_display.textContent = '';
			working_tree.textContent = `${number}${symbol}`;
		default:
			main_display.textContent = `${number}`;
			working_tree.textContent = '';
			break;
	}
}

/*the only thing that really makes a differnece in what's being diplayed
is the equal button. otherwise, the tree will have nothing or a number and a symbol
i.e. 2 +    or 8 x 

when its a result, the tree will say 2 + 2   or  8 * 7
I hit an operand after thatn, the tree would then be 4 +  or  56 / ...*/
