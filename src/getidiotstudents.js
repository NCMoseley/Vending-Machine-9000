const data = require("../src/data");

module.exports = function getIdiotStudents() {
  if (data.length) {
    const array3 = [];
    const failures = data.filter(
      i =>
        i.project1 === "fail" &&
        i.project2 === "fail" &&
        i.project3 === "fail" &&
        i.project4 === "fail"
    );
    const idiotStudents = failures.map(i => {
      let x = {};
      x["name"] = i.name;
      x["age"] = i.age;
      array3.push(x);
    });
    {
      console.log("Idiots", array3);
      return array3;
    }
  } else {
    return "No idiot students";
  }
};
