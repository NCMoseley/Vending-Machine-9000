const data = require("../src/data");

module.exports = function getSatisfiedStudents(setSatisfaction) {
  if (typeof setSatisfaction === "number") {
    const array2 = [];
    const happyStudents = data.filter(i => i.satisfaction >= setSatisfaction);
    const studentInfo = happyStudents.map(i => {
      let q = {};
      q["name"] = i.name;
      q["satisfaction"] = i.satisfaction;
      return array2.push(q);
    });
    console.log("Happy Students", array2);
  } else {
    return "No satisfied students";
  }
};
