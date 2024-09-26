
const stuInfo = (req, res) => {
    res.send("This is student information!!");
}

const stuFees = (req, res) => {
    res.send("Student Fees Information!!");
}

const stuResult = (req, res) => {
    res.send("Student Result Information!!");
}

const stuSubject = (req, res) => {
    res.send("Student Subject Information!!");
}

module.exports = {
    stuInfo,
    stuFees,
    stuResult,
    stuSubject
}
