const express=require("express");
const route=express.Router();

route.get("/",(req,res)=>{
    res.send("<h1>Employee Home page!!</h1>")
})
route.get("/emplist",(req,res)=>{
    res.send("<h1>Employee List Information!!</h1>")
})
route.get("/empdetail",(req,res)=>{
    res.send("<h1>Employee detail !!</h1>")
})

route.get("/empsalary",(req,res)=>{
    res.send("<h1>Employee Salary !!</h1>")
})


module.exports=route;