var express=require("express");
var app=express();
app.get("/",(req,res)=>{
    res.send("<h1>Home Page</h1>");
})
app.get("/about",(req,res)=>{
    res.send("<h1>About Us Page</h1>");
})
app.get("/contact",(req,res)=>{
    res.send("<h1>Contact Us Page..........</h1>");
})
app.listen(9000);


// npx nodemon index.js(run)