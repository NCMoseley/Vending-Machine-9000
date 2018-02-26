const inventory = require("../src/inventory");

module.exports = function isInventoryAvailable(customerInput) {
	const selectedProduct = [];
	const product = inventory.filter(i => i.code === customerInput);
	const x = product.map(i => {
		let q = {};
		q["name"] = i.name;
		q["code"] = i.code;
		q["quantity"] = i.quantity;
		q["price"] = i.price;
		return selectedProduct.push(q);
	});
	console.log("We have", selectedProduct[0].quantity, "available");
	if (selectedProduct[0].quantity > 0) {
		return true;
	} else {
		return false;
	}
};
