const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.send("<h1>Marking Home page !!</h1>");
});
route.get("/digital", (req, res) => {
  res.send("<h1>Marketing digital !!</h1>");
});
route.get("/banner", (req, res) => {
  res.send("<h1>Marketing Tv !!</h1>");
});

route.get("/newspaper", (req, res) => {
  res.send("<h1>Marketing newspaper!!</h1>");
});

module.exports = route;
