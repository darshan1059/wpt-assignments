const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./assignment1.html"));
});

app.get("/getlist", (req, res) => {
  str = `
  <h2>The parameters are</h2>
  <ul>
    <li>${req.query.first}</li>
    <li>${req.query.second}</li>
    <li>${req.query.third}</li>
  </ul>
  `;
  res.send(str);
});

app.listen(8000, () => {
  console.log("App is listening on http://localhost:8000");
});
