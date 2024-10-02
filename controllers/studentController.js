// const StuModel = require("../models/studentModel");

// // Handler for retrieving student information
// const stuInformation = (req, res) => {
//     res.send("This is student information; we are from Cybrom!!");
// };

// // Handler for saving student data
// const studataSave = async (req, res) => {
//     const { rollno, name, city } = req.body;

//     // Create a new student instance
//     const student = new StuModel({
//         rollno: rollno,
//         name: name,
//         city: city
//     });

//     try {
//         // Save the student data to the database
//         await student.save();
//         res.status(201).send("Data successfully saved");
//     } catch (error) {
//         console.error("Error saving data:", error);
//         res.status(500).send("Failed to save data");
//     }
// };

// module.exports = {
//     stuInformation,
//     studataSave
// };


// set of fn
// schema-strucure

const StuModel = require("../models/studentModel")//insert upade delete

const stuInformation = (req, res) => {
    res.send("This is Student Home Pages!!")
}

const studataSave = (req, res) => {
    
    const { rollno,name,city,fees}=req.body;

    const student=new StuModel({
       rollno:rollno,
       name:name,
       city:city,
       fees:fees
    })
    student.save();
    
    res.send("Data succesfully Save!!");

}
const studentDisplay=async(req,res)=>{
 const studata=await StuModel.find();
 res.send(studata);
//  res.send("Heeeeee");
}
const studentSearch=async(req,res)=>{
    const{rollno}=req.body;
    const studata=await StuModel.find({"rollno":rollno});
    console.log(studata);
    res.send(studata);
    
}
// console.log(req.body);
module.exports = {
    stuInformation,
    studataSave,
    studentDisplay,
    studentSearch

}