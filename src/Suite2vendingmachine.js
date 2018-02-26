"use strict";

const Money = require("../src/money");
const Products = require("../src/products");

// Please NOTE this code is inspired from a source listed in the readme.

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
		const coinIndex = this.coinsAccepted.indexOf(coin);
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
		let total = 0;
		for (let i = 0; i < this.coinsAdded.length; i++) {
			total += this.coinsAdded[i].value;
		}
		this.amountInserted = total;
	};

	this.insertCoin = function(coin) {
		const coinIndex = this.coinsAccepted.indexOf(coin);
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
		const idx = this.products
			.map(p => {
				return p.name;
			})
			.indexOf(product.name);
		if (idx > -1) {
			if (number == null || typeof number == "undefined") {
				number = 1;
			}
			this.inventory[idx] = this.inventory[idx] + number;
		}
	};

	this.getInventory = function(product) {
		const idx = this.products
			.map(p => {
				return p.name;
			})
			.indexOf(product.name);
		if (idx > -1) {
			return this.inventory[idx];
		} else {
			return 0;
		}
	};

	this.purchaseProduct = function(product) {
		this.amountInserted = this.amountInserted - product.cost;
		this.coinsAdded = [];
	};

	this.vend = function(product) {
		const idx = this.products
			.map(p => {
				return p.name;
			})
			.indexOf(product.name);
		if (idx > -1) {
			this.purchaseProduct(product);

			this.inventory[idx]--;

			this.itemBin.push(product);

			this.updateDisplay();
		}
	};
};
