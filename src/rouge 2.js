const data = require("../src/data");

module.exports = function rouge(data) {
  if (typeof data !== "object") {
    return "bad data";
  } else {
    return "good data";
  }
};
