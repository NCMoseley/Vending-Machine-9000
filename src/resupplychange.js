change = [
	{ name: "nickels", quantity: 0, value: 0.05 },
	{ name: "dimes", quantity: 0, value: 0.1 },
	{ name: "quarters", quantity: 10, value: 0.25 }
	// { name: "loonies", quantity: 5, value: 1.0 },
	// { name: "twonies", quantity: 5, value: 2.0 }
];

module.exports = function reSupplyChange(change) {
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
	if (selectedProduct2[0].price <= creditInput) {
		selectedProduct2[0].quantity - 1;
		console.log(
			"Thank you, have a nice life, here is " +
				(creditInput - selectedProduct2[0].price) / 0.25 +
				" quarters"
		);
		console.log(
			selectedProduct2[0].quantity -
				1 +
				" " +
				selectedProduct2[0].name +
				" remaining"
		);
		{
			return (
				"Thank you, have a nice life " +
				(creditInput - selectedProduct2[0].price) +
				" number of quarters"
			);
		}
	} else {
		return false;
	}
};
