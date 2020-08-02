const arrayOfNumbers: Array<number> = [ 1, 1, 2, 3, 5, 8, 13 ];
const arrayOfStrings: Array<string> = [ 'gogogo', 'backbackback', 'fuckfuckfuck' ];
const arrayOfbooleans: Array<boolean> = [ true, false, true, true, true, false ];

// здесь подобие шаблонов на с++ принимающие шаблон Т и возвращают массив из Т
function reverse<G>(array: Array<G>): Array<G> {
	return array.reverse();
}

reverse(arrayOfNumbers);
reverse(arrayOfStrings);
