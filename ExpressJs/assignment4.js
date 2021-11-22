const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./assignment4.html"));
});

app.get("/printable", (req, res) => {
  let num = req.query.num;
  let str = "";
  for (let i = 1; i <= 10; i++) {
    str += num * i + "<br>";
  }
  res.send(str);
});

app.listen(8000, () => {
  console.log("App is listening on http://localhost:8000");
});
