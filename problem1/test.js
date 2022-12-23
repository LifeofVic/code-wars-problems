var hotpo = function (n) {
	let count = 0;
	while (n > 1) {
		count++;
		n = n % 2 ? n * 3 + 1 : n / 2;
	}
	return count;
};

//Examples

hotpo(1); //returns 0 (1 is already 1)

hotpo(5); //returns 5 5 -> 16 -> 8 -> 4 -> 2 -> 1

hotpo(6); // returns 8 6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

hotpo(23); //returns 15
// 23 -> 70 -> 35 -> 106 -> 53 -> 160 -> 80 -> 40 -> 20 -> 10
// -> 5 -> 16 -> 8 -> 4 -> 2 -> 1
