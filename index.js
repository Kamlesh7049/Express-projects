const express = require("express");
const app= express();
const mongoose= require("mongoose");
const StuRoute=require("./routes/studentRoutes");
// mongoose.connect("mongodb://127.0.0.1:27017/Kamlesh").then()
mongoose.connect("mongodb://127.0.0.1:27017/Kamlesh", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));


app.use("/students",StuRoute);

app.listen(8000,()=>{
    console.log("Server run on 8000!")
})
