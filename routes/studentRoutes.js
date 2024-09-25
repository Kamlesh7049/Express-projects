const express=require("express");
const route=express.Router();

route.get("/",(req,res)=>{
    res.send("<h1>student Home page!!</h1>")
})
route.get("/stuinfo",(req,res)=>{
    res.send("<h1>student Information!!</h1>")
})
route.get("/stufess",(req,res)=>{
    res.send("<h1>student fess!!</h1>")
})

route.get("/stuclass",(req,res)=>{
    res.send("<h1>student class!!</h1>")
})

route.get("/sturesult",(req,res)=>{
    res.send("<h1>student result!!</h1>")
})
module.exports=route;