const express = require("express");
const route = express.Router();
const StuController = require("../controllers/studentController");

// Define routes
route.get("/stuinfo", StuController.stuInfo);      // For student info
route.get("/stufees", StuController.stuFees);      // Corrected stuFess to stuFees
route.get("/sturesult", StuController.stuResult);  // For student result
route.get("/stusubject", StuController.stuSubject); // Changed the duplicate path to 'stusubject' for subjects

module.exports = route;
