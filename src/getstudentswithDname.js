const data = require("../src/data");

module.exports = function getStudentsWithDName() {
  if (data[0].name !== undefined) {
    const array4 = [];
    const dpeople = data.filter(i => i.name.charAt(0) === "D");
    // const lastname = data.filter(i => i.name.split(/[ ,]+/));
    // console.log(lastname);
    const var2 = dpeople.map(i => {
      let x = {};
      x["name"] = i.name;
      x["age"] = i.age;
      array4.push(x);
    });
    {
      console.log("D people", array4);
      return array4;
    }
  } else {
    return "No students with first name";
  }
};
