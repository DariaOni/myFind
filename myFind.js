Array.prototype.myFindMethod = function (callback) {
	let found;

	for (let i = 0; i < this.length; i++) {
		let find1 = callback(this[i], i, this);

		if (find1) {
			found = this[i];
			break;
		}
	}

	return found;
};

let scores = [7, 8, 12, 3, 5, 7, 43, 24];
let evenNum = scores.myFindMethod((el) => el % 2 === 0);
console.log(evenNum);
