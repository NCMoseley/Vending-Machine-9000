const rouge = require("../src/rouge");
// const data = require("../src/data");
const getPassersOver = require("../src/getpassersover");
const getSatisfiedStudents = require("../src/getsatisfiedstudents");
const getIdiotStudents = require("../src/getidiotstudents");
const getStudentsWithDName = require("../src/getstudentswithDname");

describe("Student Stats", () => {
  describe("Is input an object?", () => {
    test("Should stop the function if input is not an array", () => {
      const result = rouge(data);
      expect(result).not.toBe("bad data");
    });
  });

  describe("How the old student got a tiger", () => {
    test("Should fetch a list of students over 30", () => {
      const result2 = getPassersOver(30);
      // console.log(result2);
      expect(result2).not.toBe("setage not a number");
    });
  });

  describe("Student Satisfaction", () => {
    test("Should fetch a list of students who rated satisfied more than 3", () => {
      const result3 = getSatisfiedStudents(4);
      expect(result3).not.toBe("No satisfied students");
    });
  });

  describe("Don't go chasing waterfalls", () => {
    test("Should fetch a list of students who have not passed at all", () => {
      const result3 = getIdiotStudents();
      // console.log("Idiots", result3);
      expect(result3).not.toBe("No idiot students");
    });
  });

  describe("Don't be prejudice", () => {
    test("Should fetch a list of students who have names starting with D", () => {
      const result4 = getStudentsWithDName();
      // console.log("D people", result4);
      expect(result4).not.toBe("No students with first name");
    });
  });
});
