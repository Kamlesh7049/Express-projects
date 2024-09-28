const express = require("express");
const route = express.Router();
const StuController = require("../controllers/studentController");

// Route to get student information
route.get("/stuinfo", StuController.stuInformation);

// Route to save student data (should use POST)
route.post("/datasave", StuController.studataSave);

module.exports = route;
