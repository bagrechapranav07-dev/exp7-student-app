
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Student = require("./models/Student");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/exp7")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "student.html"));
});

// CREATE
app.post("/add", async (req, res) => {
    await Student.create(req.body);
    res.send("Student Added Successfully");
});

// READ
app.get("/students", async (req, res) => {
    const data = await Student.find();
    res.json(data);
});

// UPDATE
app.put("/update/:id", async (req, res) => {
    const data = await Student.findByIdAndUpdate(
        req.params.id, req.body, { new: true }
    );
    res.json(data);
});

// DELETE
app.delete("/delete/:id", async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.send("Student Deleted");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
