module.exports = function editsAway(wordone, wordtwo) {
	if (typeof wordone !== "string" || typeof wordtwo !== "string") {
		return "Error, you must enter a string";
	}
	let longorEqual;
	let short;
	if (wordone.length > wordtwo.length) {
		longorEqual = wordone;
		short = wordtwo;
	} else {
		longorEqual = wordtwo;
		short = wordone;
		// console.log(longorEqual, short);
	}

	let oneArray = longorEqual.split("");
	let twoArray = short.split("");
	let combined = oneArray.concat(twoArray);
	// console.log(combined);
	let outOfOrder = 0;

	combined = combined.reduce((allLetters, i) => {
		if (i in allLetters) {
			allLetters[i]++;
		} else {
			allLetters[i] = 1;
		}
		return allLetters;
	}, {});

	const answer = Object.entries(combined);
	let total = answer.filter(i => i.includes(1));

	if (total.length >= 2) {
		return false;
	} else {
		return true;
	}
};
