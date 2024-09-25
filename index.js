// const express=require("express");
// const app=express();
// const PORT=8000;

// const StuRoute=require("./routes/studentRoutes");
// const TeacherRoute=require("./routes/teacherRoutes");
// app.get("/",(req,res)=>{
//     res.send("this is my home page!!")
// })
// app.use("/students",StuRoute)
// app.use("/teachers",TeacherRoute)

// app.listen(PORT,()=>{
//     console.log(`Server Run on port:${PORT}`);
// })

const express=require("express");
const app=express();
const PORT=8000;

const EmployeeRoute=require("./routes/employeeRoutes");
const ProductionRoute=require("./routes/productionRoutes");
const MarketingRoute=require("./routes/marketingRoutes");
app.get("/",(req,res)=>{
    res.send("This is my home page!!")
})
app.use("/employees",EmployeeRoute)
app.use("/productions",ProductionRoute)
app.use("/Marketings",MarketingRoute)

app.listen(PORT,()=>{
    console.log(`Server Run on port:${PORT}`);
})