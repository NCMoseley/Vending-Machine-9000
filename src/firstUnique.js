module.exports = function firstUnique(myString) {
	if (typeof myString === "string") {
		const chars = myString.split("");
		for (var i = 0; i < myString.length; i++) {
			if (
				chars.filter(function(j) {
					return j === myString.charAt(i);
				}).length === 1
			) {
				console.log(myString.charAt(i));
				return myString.charAt(i);
			}
		}
	} else {
		return "Not a string";
	}
};
