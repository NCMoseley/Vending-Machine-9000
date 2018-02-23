const largestoffour = require("../src/largestoffour");

arr = [
	[4, 5, 1, 3],
	[13, 27, 18, 26],
	[32, 35, 37, 39],
	[3, 7, 1, 6],
	[1000, 1001, 857, 1]
];

arr2 = [[1, 2, 3, 4, 5], ["trt", "werwer", 450]];

arr3 = [];

describe("Is input an array of arrays?", () => {
	test("Should stop the function if input is not an array of arrays", () => {
		const result = largestoffour(arr);
		console.log(result);
		expect(result).not.toBe("Not an array of arrays");
	});
});

describe("Are arrays full of numbers?", () => {
	test("Should stop the function if arrays are not populated with numbers only", () => {
		const result = largestoffour(arr);
		console.log(result);
		expect(result).not.toContainEqual(NaN);
	});
});

describe("Are arrays empty?", () => {
	test("Should stop the function if arrays are not populated with numbers", () => {
		const result = largestoffour(arr);
		console.log(result);
		expect(result).not.toBe("Not an array of arrays");
	});
});
