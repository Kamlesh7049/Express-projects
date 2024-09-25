const express=require("express");
const route=express.Router();

route.get("/",(req,res)=>{
    res.send("<h1>Production  Home page!!</h1>")
})
route.get("/prodetail",(req,res)=>{
    res.send("<h1>Production detail!!</h1>")
})
route.get("/totalsel",(req,res)=>{
    res.send("<h1>Production total sell !!</h1>")
})

route.get("/totalunit",(req,res)=>{
    res.send("<h1>Production total unit !!</h1>")
})

route.get("/distribution",(req,res)=>{
    res.send("<h1>Production distribution !!</h1>")
})


module.exports=route;