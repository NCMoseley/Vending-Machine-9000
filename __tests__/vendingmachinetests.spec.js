"use strict";

const VendingMachine = require("../src/vendingmachine");
const insertCoin = require("../src/vendingmachine");
const updateDisplay = require("../src/vendingmachine");
const updateTotal = require("../src/vendingmachine");
const returnCoins = require("../src/vendingmachine");
const addInventory = require("../src/vendingmachine");
const getInventory = require("../src/vendingmachine");
const purchaseProduct = require("../src/vendingmachine");

// Please NOTE much of this code is inspired from a source listed in the readme.

const Money = {
	DOLLAR: { name: "Dollar", value: 1.0 },
	QUARTER: { name: "Quarter", value: 0.25 },
	DIME: { name: "Dime", value: 0.1 },
	NICKEL: { name: "Nickel", value: 0.05 }
};

const Product = {
	A01: { name: "Skittles", cost: 1.25 },
	A02: { name: "Power Bar", cost: 1.25 },
	A03: { name: "Testosterone Shot", cost: 12.25 },
	A04: { name: "Muscle Milk", cost: 1.25 },
	B01: { name: "Coke Zero", cost: 1.25 },
	B02: { name: "Red Bull", cost: 3.25 },
	B03: { name: "Whippet", cost: 15.25 },
	B04: { name: "Poppet", cost: 18.25 }
};

describe("Vending Machine", function() {
	let vendingMachine;

	beforeEach(function() {
		vendingMachine = new VendingMachine();
	});

	describe("Construction", function() {
		it("Displays Insert Coin When Powered Up", function() {
			expect(vendingMachine.display).toEqual("INSERT COIN");
		});
	});

	describe("Inserting Coins", function() {
		it("Displays 0.25 when a Quarter is Entered", function() {
			vendingMachine.insertCoin(Money.QUARTER);
			expect(vendingMachine.display).toEqual("$0.25");
		});

		it("Displays 0.10 when a Dime is Entered", function() {
			vendingMachine.insertCoin(Money.DIME);
			expect(vendingMachine.display).toEqual("$0.10");
		});

		it("Displays 0.05 when a Nickel is Entered", function() {
			vendingMachine.insertCoin(Money.NICKEL);
			expect(vendingMachine.display).toEqual("$0.05");
		});

		it("Displays 1.00 when a Dollar is Entered", function() {
			vendingMachine.insertCoin(Money.DOLLAR);
			expect(vendingMachine.display).toEqual("$1.00");
		});

		it("Displays the added value of multiple coins", function() {
			vendingMachine.insertCoin(Money.NICKEL);
			vendingMachine.insertCoin(Money.QUARTER);
			expect(vendingMachine.display).toEqual("$0.30");
			vendingMachine.insertCoin(Money.DIME);
			vendingMachine.insertCoin(Money.DOLLAR);
			expect(vendingMachine.display).toEqual("$1.40");
		});
	});

	describe("Coin Return", function() {
		it("returns a coin if the return coin button is pressed", function() {
			vendingMachine.insertCoin(Money.NICKEL);
			vendingMachine.returnCoins();
			expect(vendingMachine.coinReturn).toContain(Money.NICKEL);
			expect(vendingMachine.coinReturn.length).toBe(1);
		});

		it("it updates the display to show no money has been entered after coins are returned", function() {
			vendingMachine.insertCoin(Money.NICKEL);
			vendingMachine.returnCoins();
			expect(vendingMachine.display).toEqual("INSERT COIN");
		});

		it("contains no coins if the return coin button is pressed", function() {
			vendingMachine.insertCoin(Money.NICKEL);
			vendingMachine.returnCoins();
			expect(vendingMachine.coinsAdded.length).toBe(0);
		});

		it("can return multiple coins", function() {
			vendingMachine.insertCoin(Money.NICKEL);
			vendingMachine.insertCoin(Money.DIME);
			vendingMachine.insertCoin(Money.QUARTER);
			vendingMachine.returnCoins();
			expect(vendingMachine.coinReturn).toContain(Money.NICKEL);
			expect(vendingMachine.coinReturn).toContain(Money.DIME);
			expect(vendingMachine.coinReturn).toContain(Money.QUARTER);
			expect(vendingMachine.coinReturn.length).toBe(3);
		});
	});

	describe("it holds products sorted by type", function() {
		it("Holds products to be purchased", function() {
			expect(vendingMachine.products.length).toBe(8);
		});

		it("Can have more product added to inventory", function() {
			vendingMachine.addInventory(Product.A02, 1);
			expect(vendingMachine.getInventory(Product.A02)).toBe(1);
		});

		it("Can add multiple product to inventory", function() {
			vendingMachine.addInventory(Product.A02);
			vendingMachine.addInventory(Product.A02);
			expect(vendingMachine.getInventory(Product.A02)).toBe(2);
		});

		it("Can add multiple product to inventory, easily", function() {
			vendingMachine.addInventory(Product.A01, 10);
			expect(vendingMachine.getInventory(Product.A01)).toBe(10);
		});

		it("Can vend items and reduce its inventory", function() {
			vendingMachine.addInventory(Product.A01, 10);
			vendingMachine.vend(Product.A01);
			expect(vendingMachine.getInventory(Product.A01)).toBe(9);
		});

		it("Can vend items and place the item in the item bin", function() {
			vendingMachine.addInventory(Product.A01, 10);
			vendingMachine.vend(Product.A01);
			expect(vendingMachine.itemBin).toContain(Product.A01);
		});
	});

	describe("it allows a user to purchase an item and retrieve it from the bin", function() {
		beforeEach(function() {
			vendingMachine.addInventory(Product.A01, 10);
			vendingMachine.addInventory(Product.A03, 1);
			vendingMachine.addInventory(Product.A02, 10);
		});

		it("Allows a user to buy a product using exact change", function() {
			vendingMachine.insertCoin(Money.DOLLAR);
			vendingMachine.insertCoin(Money.QUARTER);
			vendingMachine.vend(Product.A03);
			expect(vendingMachine.itemBin).toContain(Product.A03);
			expect(vendingMachine.display).toBe("INSERT COIN");
		});
	});
});
