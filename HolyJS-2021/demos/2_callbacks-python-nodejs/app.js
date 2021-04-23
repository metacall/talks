const { operateNumbers } = require("./module.py");

console.log(
  operateNumbers([1, 2, 3], (num) => {
    return num + 10;
  })
);
