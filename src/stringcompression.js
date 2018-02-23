// module.exports =
function stringCompression(str) {
	// if (typeof str !== String) {
	// 	return "error";
	// }
	let array = str.split("");
	if (
		array.filter(letter => {
			return !isNaN(letter);
		}).length > 0
	) {
		return "error";
	}
	array = array.reduce((allLetters, letter) => {
		if (letter in allLetters) {
			allLetters[letter]++;
		} else {
			allLetters[letter] = 1;
		}
		return allLetters;
	}, {});
	const answer = Object.entries(array)
		.join()
		.replace(/[,]+/g, "")
		.replace(/[' ']+/g, "");
	return answer;
	console.log(answer);
}
console.log(stringCompression("heygraveman,digging"));
