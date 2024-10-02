// const express = require("express");
// const app= express();
// const mongoose= require("mongoose");
// const StuRoute=require("./routes/studentRoutes");
// const bodyParser = require("body-parser");
// // mongoose.connect("mongodb://127.0.0.1:27017/Kamlesh").then()
// mongoose.connect("mongodb://127.0.0.1:27017/Kamlesh")
//     .then(() => console.log("MongoDB connected"))
    

    
// //Parse incoming requests with json payloads
// app.use(bodyParser.json);

// //Parse incoming requests with urlencoded payloads
// app.use(bodyParser.urlencoded({extended:true}));

// app.use("/students",StuRoute);

// app.listen(8080,()=>{
//     console.log("Server run on 8000!")
// })



// one pakage mongoose

const express =require("express")
const app=express();
const mongoose=require("mongoose")
const StuRoute=require("./routes/studentRoutes");
const bodyParser = require("body-parser"); //  body parser convert karna

mongoose.connect("mongodb://127.0.0.1:27017/Mydata").then(()=>{
    console.log("Data Succesfully connected")
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use("/students",StuRoute)

app.listen(9000,()=>{
    console.log("Server is running on 9000")
})