const StuModel = require("../models/studentModel");

// Handler for retrieving student information
const stuInformation = (req, res) => {
    res.send("This is student information; we are from Cybrom!!");
};

// Handler for saving student data
const studataSave = async (req, res) => {
    const { rollno, name, city } = req.body;

    // Create a new student instance
    const student = new StuModel({
        rollno: rollno,
        name: name,
        city: city
    });

    try {
        // Save the student data to the database
        await student.save();
        res.status(201).send("Data successfully saved");
    } catch (error) {
        console.error("Error saving data:", error);
        res.status(500).send("Failed to save data");
    }
};

module.exports = {
    stuInformation,
    studataSave
};
