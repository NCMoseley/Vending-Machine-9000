const stringCompression = require("../src/stringCompression");

// String Compression suite
describe("How many duplicates?", () => {
	describe("how many of each letter in the string?", () => {
		test("should return true", () => {
			const result = stringCompression("Oh who was it I saw, oh who?");
			expect(result).toBeDefined();
		});
	});
});
