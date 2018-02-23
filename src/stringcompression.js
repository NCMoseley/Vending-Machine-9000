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

// const arrayString = myString.split([]);
// console.log(arrayString);
// arrayString = [
// 	"a",
// 	"b",
// 	"c",
// 	"d",
// 	"e",
// 	"a",
// 	"b",
// 	"c",
// 	"f",
// 	"g",
// 	"h",
// 	"h",
// 	"h",
// 	"e",
// 	"a"
// ];
// const arrayString = myString.split("");
// var obj = {};
// var repeats = [];
// // str = myString;
// str = "kayak";
// console.log(str);
// for (x = 0, length = str.length; x < length; x++) {
// 	var l = str.charAt(x);
// 	obj[l] = isNaN(obj[l]) ? 1 : obj[l] + 1;
// }
// console.log(obj);
// console.log(repeats);
// var current = null;
// var cnt = 0;
// for (const i = 0; i < arrayString.length; i++) {
// 	if (arrayString[i] != current) {
// 		if (cnt > 0) {
// 			console.log(current + " comes --> " + cnt + " times<br>");
// 		}
// 		current = arrayString[i];
// 		cnt = 1;
// 	} else {
// 		cnt++;
// 	}
// 	if (cnt > 0) {
// 		console.log(current + " comes --> " + cnt + " times");
// 		return cnt;
// 	}
// }
// };

// array_elements = ["a", "b", "c", "d", "e", "a", "b", "c", "f", "g", "h", "h", "h", "e", "a"];
