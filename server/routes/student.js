const express = require("express");
const bcrypt = require("bcrypt");
const studentmodel = require("../models/Student.js");
const router = express.Router();
const verifyAdmin = require("./auth.js");

router.post("/register", verifyAdmin, async (req, res) => {
  try {
    const { username, password, regnum, grade } = req.body;
    const student = await studentmodel.findOne({ username });
    if (student) {
      return res.json({ message: "Student is registered" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newstudent = new studentmodel({
      reg_number: regnum,
      username,
      password: hashPassword,
      grade,
    });
    await newstudent.save();
    return res.json({ registered: true });
  } catch (err) {
    return res.json({ message: "Error in registering student" });
  }
});

module.exports = router;
