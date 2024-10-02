// const mongoose=require("mongoose");
// const stuSchema=new mongoose.Schema({
//     rollno:Number,
//     name:String,
//     city:String
    
// })
// module.exports=mongoose.model("student",stuSchema);


// database


const mongoose=require("mongoose")
const stuSchema=new mongoose.Schema({
     rollno:Number,
       name:String,
       city:String,
       fees:Number
    
})
module.exports=mongoose.model("student",stuSchema);