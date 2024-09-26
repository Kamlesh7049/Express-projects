const express = require("express");
const app = express();
const PORT = 8000;

// Import the student routes
const StuRoute = require("./routes/studentRoutes");  // Ensure the correct file is imported

// Use the student routes under '/students' path
app.use("/students", StuRoute);

// Home page route
app.get("/", (req, res) => {
    res.send("This is my home page!!");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
    