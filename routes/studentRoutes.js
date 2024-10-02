// 


const express=require("express")
const route=express.Router()
const StuController=require("../controllers/studentController")

route.get("/stuinfo",StuController.stuInformation);
route.post("/datasave",StuController.studataSave);
route.get("/display",StuController.studentDisplay);
route.post("/search",StuController.studentSearch);

module.exports=route