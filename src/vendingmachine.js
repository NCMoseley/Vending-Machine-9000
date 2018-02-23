const inventory = require("../src/data");

// Some code to control the inventory,

// Some code to handle the inputs

// Some code

module.exports = function getSpecificInventory(customerInput) {
	var result = inventory.map(a => a.code);
	if (result.includes(customerInput)) {
		return customerInput;
	} else {
		return "Not available at this time";
	}
};

module.exports = function isInventoryAvailable(customerInput) {
	var result = inventory.map(a => a.code);

	if (result.includes(customerInput)) {
		return customerInput;
	} else {
		return "Not available at this time";
	}
};
// module.exports = function getSpecificInventory(customerInput) {
// 	let allCodes = "";
// 	for (const code in inventory) {
// 		allCodes = allCodes + inventory[code];
// 	}
// 	console.log(inventory[code]);
// };

// module.exports = function getSpecificInventory(customerInput) {
// 	let i = 0;
// 	while (i < inventory.length && inventory[i].code === customerInput) {
// 		if (inventory[i].code === customerInput) {
// 			console.log(inventory[i].code);
// 			return inventory[i].code;
// 			// const array2 = [];
// 			// const happyStudents = data.filter(i => i.satisfaction >= setSatisfaction);
// 			// const studentInfo = happyStudents.map(i => {
// 			// 	let q = {};
// 			// 	q["name"] = i.name;
// 			// 	q["satisfaction"] = i.satisfaction;
// 			// 	return array2.push(q);
// 			// });
// 			// console.log("Happy Students", array2);
// 		} else {
// 			return "Not available at this time";
// 		}
// 		i++;
// 	}
// };

// module.exports = function getPassersOver(setage) {
//   if (typeof setage === "number") {
//     const array = [];
//     const studentsOver = data.filter(
//       i =>
//         i.age > setage &&
//         i.project1 === "pass" &&
//         i.project2 === "pass" &&
//         i.project3 === "pass" &&
//         i.project4 === "pass"
//     );
//     const studentInfo = studentsOver.map(i => {
//       let s = {};
//       s["name"] = i.name;
//       s["age"] = i.age;
//       return array.push(s);
//     });
//     console.log("Old students who ace everything", array);
//   } else {
//     return "setage not a number";
//   }
// };
