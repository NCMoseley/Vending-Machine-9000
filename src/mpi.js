// Minimum positive integer

module.exports = function mpi(myArr) {
	if (typeof myArr === "object" && myArr.length >= 1) {
		for (i = 1; i <= myArr.length; i++) {
			if (!myArr.includes(i)) {
				console.log(i);
				return i;
			}
		}
	} else {
		return "Not an object, or empty array";
	}
};
