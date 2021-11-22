const fs = require("fs");

fs.readFile("./text.txt", (err, data) => {
  if (err) console.error(err);
  const arr = data.toString().split("\n");
  let i = 0;
  arr.forEach((line) => {
    console.log(`${++i}: ${line}`);
  });
});
