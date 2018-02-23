const frogJumps = require("../src/frogJumps");

// Frog jump suite
describe("Frogs a jumpin", () => {
	describe("when start is equal to end", () => {
		test("should return 0", () => {
			const result = frogJumps(10, 10, 5);
			expect(result).toEqual(0);
		});
	});
});

describe("when end is less than 0", () => {
	test("should return 0", () => {
		const result = frogJumps(10, -10, 5);
		expect(result).toEqual(0);
	});
});

describe("when start is less than 0", () => {
	test("should return 0", () => {
		const result = frogJumps(-10, 10, 5);
		expect(result).toEqual(0);
	});
});

describe("when jumpLength is less or equal to 0", () => {
	test("should return 0", () => {
		const result = frogJumps(10, 10, -5);
		expect(result).toEqual(0);
	});
});

describe("input is NaN", () => {
	test("should return NaN", () => {
		const result = frogJumps(undefined, undefined, "y");
		expect(result).toEqual(NaN);
	});
});
