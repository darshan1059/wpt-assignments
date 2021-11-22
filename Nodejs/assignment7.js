const fs = require("fs");

const arrName = ["Hello", "Hi", "Tata", "Bye"];

fs.writeFile("names.txt", arrName.join("|"), (err) => {
  if (err) 
    console.error("An error occured: " + err);
  else
    console.log("Successful");
});