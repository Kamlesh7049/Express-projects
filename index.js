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

// -------------------------------------------------------------

// one pakage mongoose


// --------------------------------------------------

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

// ------------------------------------------------------------
// const express=require("express");
// const app=express();
// app.use("/",(req,res,next)=>{
//     console.log("this midile Ware always run")
//     next()
// })
// app.get("/home",(req,res,next)=>{
// console.log("Home Console!")
// res.send ("Home Page")  
// next();
// })

// app.get("/about",(req,res)=>{
//     console.log("About Page")
//     res.send("Hello About Page")
// })
// app.use("/",(req,res,next)=>{
//     console.log("Mide Ware1");
//     next();
// })
// app.use("/",(req,res)=>{
//     console.log("Middle ware 2!  ")
// })

// app.listen(8000,()=>{
//     console.log("server run on 8000!!!!")
// })