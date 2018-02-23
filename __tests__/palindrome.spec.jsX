const palindrome = require("../src/palindrome");

// Palindrome suite
describe("Is Palindrome?", () => {
	describe("when start is equal to end", () => {
		test("should return true", () => {
			const result = palindrome("\"Oh who was it I saw, oh who?\"");
			expect(result).toBeTruthy();
		});
	});
});

describe("input", () => {
	test("should return false", () => {
		const result = palindrome();
		expect(result).toBeFalsy();
	});
});

describe("when start is equal to end", () => {
	test("should return not palindrome", () => {
		const result = palindrome("\"Star Wars\"");
		expect(result).toBe("not palindrome");
	});
});
// palindrome("\"Oh who was it I saw, oh who?\"");
// palindrome("\"Madam\"");
// palindrome("\"Star Wars\"");
// palindrome("\"2,3,4,3,2\"");
// palindrome("\"7,10,7,8,9\"");
