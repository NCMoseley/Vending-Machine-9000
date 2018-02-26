inventory = [
	{ name: "Skittles", code: "A01", quantity: 10, price: 1.25 },
	{ name: "Power Bar", code: "A02", quantity: 5, price: 1.25 },
	{ name: "Testosterone Shot", code: "A03", quantity: 1, price: 12.25 },
	{ name: "Muscle Milk", code: "A04", quantity: 0, price: 1.25 },
	{ name: "Coke Zero", code: "B01", quantity: 12, price: 1.25 },
	{ name: "Red Bull", code: "B02", quantity: 0, price: 3.25 },
	{ name: "Whippet", code: "B03", quantity: 12, price: 15.25 }
];

module.exports = function refillInventory() {
	for (var i = 0; i < inventory.length; i++) {
		if (inventory[i].quantity === 0) {
			inventory[i].quantity = 20;
		}
	}
	return inventory;
};
