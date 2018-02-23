const getSpecificInventory = require("../src/getspecificinventory");
const isInventoryAvailable = require("../src/isInventoryAvailable");
const isItemPaidFor = require("../src/isitempaidfor");
// Vending Test 1 suite
describe("Functionality testing", () => {
	describe("Does machine return correct item?", () => {
		test("should return 1 item", () => {
			const result = getSpecificInventory("A02");
			// const result = getSpecificInventory("C02");
			console.log(result);
			expect(result).not.toBe("Not a valid selection");
		});
	});

	describe("Requested item has inventory available?", () => {
		test("Should return true or false", () => {
			const result = isInventoryAvailable("A01");
			expect(result).toBe(true);
		});
	});

	describe("Has customer deposited enough credit?", () => {
		test("Should return true and change or false", () => {
			const result = isItemPaidFor("A01", 5.0);
			expect(result).not.toBe("Please deposit more money");
		});
	});
});

// TDD

//  We are assuming full vending functionality.
