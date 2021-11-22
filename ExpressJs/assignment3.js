const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./assignment3.html"));
});

app.get("/getdetails", (req, res) => {
  let id = req.query.id;
  let name = req.query.name;
  let billdate = req.query.billdate;
  let shipdate = req.query.shipdate;
  let total = req.query.total;
  let data = `${id}|${name}|${billdate}|${shipdate}|${total}\n`;
  fs.appendFile("order.txt", data, (err) => {
    if (err) console.error(err);
    else console.log("Order details added successfully");
  });
  res.send("Thank you");
});

app.listen(8000, () => {
  console.log("App is listening on http://localhost:8000");
});
