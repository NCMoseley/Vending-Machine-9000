module.exports = function largestOfFour(arr) {
	if (typeof arr[0] === "object" && typeof arr[0] !== undefined) {
		var max = [];
		for (var i = 0; i < arr.length; i++) {
			max.push(Math.max.apply(null, arr[i]));
		}
		return max;
	}
	return "Not an array of arrays";
};
