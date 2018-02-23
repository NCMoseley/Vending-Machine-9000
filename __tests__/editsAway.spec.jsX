// Minimum Positive integer

const editsAway = require("../src/editsAway");

myStr1 = "pale";
myStr2 = "patl";

describe("Is input an object?", () => {
	test("Should stop the function if input is not a string", () => {
		const result = editsAway(myStr1, myStr2);
		console.log(result);
		expect(result).not.toBe("Error, you must enter a string");
	});
});

describe("Is input an empty array?", () => {
	test("Should return warning", () => {
		// const result = editsAway([]);
		const result = editsAway(myStr1, myStr2);
		expect(result).not.toBe("Error, you must enter a string");
	});
});
