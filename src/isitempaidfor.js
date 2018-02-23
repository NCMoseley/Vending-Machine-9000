const inventory = require("../src/data");

module.exports = function isItemPaidFor(customerInput, creditInput) {
	const selectedProduct2 = [];
	const product2 = inventory.filter(i2 => i2.code === customerInput);
	const x2 = product2.map(i2 => {
		let q2 = {};
		q2["name"] = i2.name;
		q2["code"] = i2.code;
		q2["quantity"] = i2.quantity;
		q2["price"] = i2.price;
		return selectedProduct2.push(q2);
	});
	// console.log("We have", selectedProduct[0].quantity, "available");
	if (selectedProduct2[0].price <= creditInput) {
		console.log(
			"Thank you, have a nice life " + (creditInput - selectedProduct2[0].price)
		);
		return (
			"Thank you, have a nice life " + (creditInput - selectedProduct2[0].price)
		);
	} else {
		return false;
	}
};
