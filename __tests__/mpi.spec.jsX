// Minimum Positive integer

const mpi = require("../src/mpi");

const myArr = [];
for (var i = 0; i <= 189; i++) {
	myArr.push(Math.ceil(Math.random(i) * 100));
}
describe("Is input an object?", () => {
	test("Should stop the function if input is not an object", () => {
		// const result = mpi([1, 3, 6, 4, 1, 2]);
		// const result = mpi(420);
		const result = mpi(myArr);
		console.log(myArr);
		expect(result).not.toBe("Not an object, or empty array");
	});
});

describe("Is input an empty array?", () => {
	test("Should return warning", () => {
		const result = mpi([]);
		expect(result).toBe("Not an object, or empty array");
	});
});

// describe("Is input an empty array?", () => {
// 	test("Should return warning", () => {
// 		const result = mpi([]);
// 		expect(result).toBe("Not an object, or empty array");
// 	});
// });
