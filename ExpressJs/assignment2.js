const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./assignment2.html"));
});

app.get("/simpleCal", (req, res) => {
  let p = req.query.pa;
  let r = req.query.roi;
  let t = req.query.tp;
  str = `
  <p>
    Principal: ${p}
  </p>
  <p>
    Rate of Interest: ${r}
  </p>
  <p>
    Time Period: ${t}
  </p>
  <h3>Simple Interest: ${(p * r * t) / 100}</h3>
  `;
  res.send(str);
});

app.listen(8000, () => {
  console.log("App is listening on http://localhost:8000");
});
