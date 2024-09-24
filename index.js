const express=require("express");
const app=express();
const PORT=8000;

const StuRoute=require("./routes/studentRoutes");
const TeacherRoute=require("./routes/teacherRoutes");
app.get("/",(req,res)=>{
    res.send("this is my home page!!")
})
app.use("/students",StuRoute)
app.use("/teachers",TeacherRoute)

app.listen(PORT,()=>{
    console.log(`Server Run on port:${PORT}`);
})