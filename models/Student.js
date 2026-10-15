
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: String,
    rollno: Number,
    email: String,
    branch: String
});

module.exports = mongoose.model("Student", studentSchema);
