const express = require("express");
const bcrypt = require("bcrypt");
const studentmodel = require("../models/Student.js");
const router = express.Router();

const verifyAdmin = require("../security/adminauth.js");

//student register function
router.post("/register", verifyAdmin, async (req, res) => {
  try {
    const { regnum, username, password, academicyear } = req.body;
    if (!regnum || !username || !password || !academicyear) {
      return res.status(400).json({ message: "Provide all fields" });
    }
    const student = await studentmodel.findOne({ reg_number: regnum }); //student validate by Registration number
    if (student) {
      return res.json({ message: "Student is registered" });
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
    return res.json({ registered: true });
  } catch (err) {
    return res.json({ message: "Error in registering student" });
  }
});

module.exports = router;
