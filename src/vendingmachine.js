"use strict";

// Please NOTE this code is inspired from a source listed in the readme.

const Money = {
	DOLLAR: { name: "Dollar", value: 1.0 },
	QUARTER: { name: "Quarter", value: 0.25 },
	DIME: { name: "Dime", value: 0.1 },
	NICKEL: { name: "Nickel", value: 0.05 }
};

var Product = {
	A01: { name: "Skittles", cost: 1.25 },
	A02: { name: "Power Bar", cost: 1.25 },
	A03: { name: "Testosterone Shot", cost: 12.25 },
	A04: { name: "Muscle Milk", cost: 1.25 },
	B01: { name: "Coke Zero", cost: 1.25 },
	B02: { name: "Red Bull", cost: 3.25 },
	B03: { name: "Whippet", cost: 15.25 },
	B04: { name: "Poppet", cost: 18.25 }
};

// var Product = {
// 	CHIPS: { name: "Chips", cost: 0.75 },
// 	SODA: { name: "Soda", cost: 1.25 },
// 	CANDY: { name: "Candy", cost: 0.85 }
// };

module.exports = function VendingMachine() {
	this.display = "INSERT COIN";
	this.coinsAccepted = [Money.DOLLAR, Money.QUARTER, Money.DIME, Money.NICKEL];
	this.coinReturn = [];
	this.coinsAdded = [];
	this.amountInserted = 0;
	this.cashArray = this.coinsAccepted.map(function(coin) {
		return { value: coin, count: 0 };
	});

	this.products = [
		Product.A01,
		Product.A02,
		Product.A03,
		Product.A04,
		Product.B01,
		Product.B02,
		Product.B03,
		Product.B04
	];
	this.inventory = this.products.map(function() {
		return 0;
	});
	this.itemBin = [];

	this.cash = function(coin) {
		var coinIndex = this.coinsAccepted.indexOf(coin);
		if (coinIndex > 0) {
			return this.cashArray[coinIndex].count;
		} else {
			return 0;
		}
	};

	this.updateDisplay = function() {
		this.updateTotal();

		if (this.amountInserted > 0) {
			this.display = "$" + this.amountInserted.toFixed(2);
		} else {
			this.display = "INSERT COIN";
		}
	};

	this.updateTotal = function() {
		var total = 0;
		for (var i = 0; i < this.coinsAdded.length; i++) {
			total += this.coinsAdded[i].value;
		}
		this.amountInserted = total;
	};

	this.insertCoin = function(coin) {
		var coinIndex = this.coinsAccepted.indexOf(coin);
		if (coinIndex > -1) {
			this.coinReturn.push(coin);
			this.cashArray[coinIndex].count++;
		} else {
			this.coinsAdded.push(coin);
		}
		this.updateDisplay();
	};

	this.returnCoins = function() {
		this.coinReturn = this.coinsAdded;
		this.coinsAdded = [];
		this.updateDisplay();
	};

	this.addInventory = function(product, number) {
		var idx = this.products.indexOf(product);
		console.log(this.products);
		console.log(Product.A02);
		console.log(idk);
		if (idx > -1) {
			if (number == null || typeof number == "undefined") {
				number = 1;
			}
			this.inventory[idx] = this.inventory[idx] + number;
		}
	};

	this.getInventory = function(product) {
		var idx = this.products.indexOf(product);
		console.log(idx);
		if (idx > -1) {
			return this.inventory[idx];
		} else {
			return 0;
		}
	};

	this.purchaseProduct = function(product) {
		// console.log(product);
		this.amountInserted = this.amountInserted - product.cost;
		this.coinsAdded = [];
	};

	this.vend = function(product) {
		// console.log(product);
		var idx = this.products.indexOf(product);
		if (idx > -1) {
			this.purchaseProduct(product);

			this.inventory[idx]--;

			this.itemBin.push(product);

			this.updateDisplay();
		}
	};
};
