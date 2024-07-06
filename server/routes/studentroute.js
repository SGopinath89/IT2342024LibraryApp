const express = require("express");
const bcrypt = require("bcrypt");
const studentmodel = require("../models/Student.js");
const bookmodel = require("../models/book.js");
const router = express.Router();

const verifyAdmin = require("../security/adminauth.js");
const verifyUser = require("../security/userauth.js");

//student register function Admin can only register the students
router.post("/register", verifyAdmin, async (req, res) => {
  try {
    const { regnum, username, password, academicyear } = req.body;
    if (!regnum || !username || !password || !academicyear) {
      return res.status(400).json({ message: "Provide all fields" });
    }
    const student = await studentmodel.findOne({ reg_number: regnum }); //student validate by Registration number
    if (student) {
      return res.json({
        message: "Student Registration Number is Already Registered",
      });
    }
    //create hash password for encrypt data
    const hashPassword = await bcrypt.hash(password, 10);
    //add new student to model
    const newstudent = new studentmodel({
      reg_number: regnum,
      username,
      password: hashPassword,
      academicyear,
    });
    await newstudent.save();
    return res.json({
      registered: true,
      message: "Student Registered Successfylly",
    });
  } catch (err) {
    return res.json({ message: "Error in registering student" });
  }
});

//Student profile details
router.get("/profile/:username", verifyUser, async (req, res) => {
  try {
    const username = req.params.username;
    const profile = await studentmodel.findOne({ username: username });
    return res.json(profile);
  } catch (err) {
    return res.json(err);
  }
});

//Search books
router.get("/search", verifyUser, async (req, res) => {
  try {
    const { bookname } = req.body; //postman check
    //const { bookname } = req.query;
    if (!bookname) {
      return res.status(400).json({ message: "Enter Required Details" });
    }
    const bookdetails = await bookmodel.findOne({
      name: { $regex: bookname, $options: "i" }, //using regex for searching options
    });
    if (!bookdetails || bookdetails.length === 0) {
      return res.status(400).json({ message: "Book is not available" });
    }
    return res.status(200).json(bookdetails);
  } catch (err) {
    return res.json({ message: "Error in SearchingBook" });
  }
});

module.exports = router;
