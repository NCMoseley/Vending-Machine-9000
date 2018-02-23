const data = require("../src/data");

module.exports = function getPassersOver(setage) {
  if (typeof setage === "number") {
    const array = [];
    const studentsOver = data.filter(
      i =>
        i.age > setage &&
        i.project1 === "pass" &&
        i.project2 === "pass" &&
        i.project3 === "pass" &&
        i.project4 === "pass"
    );
    const studentInfo = studentsOver.map(i => {
      let s = {};
      s["name"] = i.name;
      s["age"] = i.age;
      return array.push(s);
    });
    console.log("Old students who ace everything", array);
  } else {
    return "setage not a number";
  }
};
