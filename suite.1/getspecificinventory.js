const inventory = require("../suite.1/inventory");

module.exports = function getSpecificInventory(customerInput) {
	var result = inventory.map(a => a.code);
	if (result.includes(customerInput)) {
		return customerInput;
	} else {
		return "Not a valid selection";
	}
};
