const express=require("express");
const route=express.Router();

route.get("/teacherinfo",(req,res)=>{
    res.send("<h1>Teacher information!!</h1>")
})
route.get("/teachersub",(req,res)=>{
    res.send("<h1>Teacher Information!!</h1>")
})

route.get("/teachersal",(req,res)=>{
    res.send("<h1>Teacher salary!!</h1>")
})

route.get("/teacherdep",(req,res)=>{
    res.send("<h1>Teacher department!!</h1>")
})

route.get("/teacherexp",(req,res)=>{
    res.send("<h1>Teacher Expriences!!</h1>")
})
module.exports=route;