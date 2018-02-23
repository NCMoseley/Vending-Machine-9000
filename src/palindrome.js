module.exports = function palindrome(myString) {
	/* remove special characters, spaces and make lowercase*/
	// const removeChar = myString.replace(/[^A-Z0-9]/gi, "").toLowerCase();

	// /* reverse removeChar for comparison*/
	// const checkPalindrome = removeChar
	// 	.split("")
	// 	.reverse()
	// 	.join("");

	/* Check to see if myString is a Palindrome*/
	if (myString !== undefined && myString.length > 0) {
		const removeChar = myString.replace(/[^A-Z0-9]/gi, "").toLowerCase();
		/* reverse removeChar for comparison*/
		const checkPalindrome = removeChar
			.split("")
			.reverse()
			.join("");
		if (removeChar === checkPalindrome) {
			console.log(removeChar, "is definitely a palindrome");
			return true;
		} else {
			console.log(removeChar, "is not a palindrome");
			return "not palindrome";
		}
	} else {
		return false;
	}
};
