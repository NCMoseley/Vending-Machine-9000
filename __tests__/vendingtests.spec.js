const getSpecificInventory = require("../src/vendingmachine");
const isInventoryAvailable = require("../src/vendingmachine");
// Vending Test 1 suite
describe("Functionality testing", () => {
	describe("Does machine return correct item?", () => {
		test("should return 1 item", () => {
			const result = getSpecificInventory("A02");
			// const result = getSpecificInventory("C02");
			console.log(result);
			expect(result).not.toBe("Not available at this time");
		});
	});

	describe("Requested item has inventory available?", () => {
		test("Should return true or false", () => {
			const result = isInventoryAvailable("A02");
			// const result = getSpecificInventory("C02");
			console.log("We have", selectedProduct[0].quantity, "available");
			expect(result).toBeTruthy();
		});
	});
});

// TDD

//  We are assuming full vending functionality.
