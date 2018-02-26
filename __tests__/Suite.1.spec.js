const getSpecificInventory = require("../suite.1/getspecificinventory");
const isInventoryAvailable = require("../suite.1/isInventoryavailable");
const isItemPaidFor = require("../suite.1/isitempaidfor");
const refillInventory = require("../suite.1/refillinventory");
const reSupplyChange = require("../suite.1/resupplychange");

const inventory = require("../suite.1/inventory");
const products = require("../suite.2/products");

// NOTE: I abandoned this design and changed to Suite 2. I wanted to include it because I am proud of the code.

describe("Functionality testing", () => {
	describe("Does machine return correct item?", () => {
		test("should return 1 item", () => {
			const result = getSpecificInventory("A02");
			// const result = getSpecificInventory("C02");
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

	describe("Will the machine refill if inventory is empty?", () => {
		test("Should return new, filled inventory", () => {
			const result = refillInventory();
			// Note: this doesn't work yet
			expect(result).not.toHaveProperty("quantity", 0);
		});
	});

	// describe("Machine will dispatch correct change", () => {
	// 	test("Should return new, filled inventory", () => {
	// 		const result = reSupplyChange(10.0, products.A03);
	// 		expect(result).not.toHaveProperty("quantity", 0);
	// 	});
	// });
});
