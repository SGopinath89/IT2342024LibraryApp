const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const adminmodel = require("../models/admin.js");
const studentmodel = require("../models/Student.js");
const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { username, password, role } = req.body;
    if (role === "admin") {
      const admin = await adminmodel.findOne({ username });
      if (!admin) {
        return res.json({ message: "admin not registered" });
      }
      const validpassword = await bcrypt.compare(password, admin.password);
      if (!validpassword) {
        return res.json({ message: "wrong Password" });
      }
      const token = jwt.sign(
        { username: admin.username, role: "admin" },
        process.env.admin_key
      );
      res.cookie("token", token, { httpOnly: true, secure: true });
      return res.json({ login: true, role: "admin" });
    } else if (role === "student") {
      const student = await studentmodel.findOne({ username });
      if (!student) {
        return res.json({ message: "Student not registered" });
      }
      const validpassword = await bcrypt.compare(password, student.password);
      if (!validpassword) {
        return res.json({ message: "wrong Password" });
      }
      const token = jwt.sign(
        { username: student.username, role: "student" },
        process.env.Student_key
      );
      res.cookie("token", token, { httpOnly: true, secure: true });
      return res.json({ login: true, role: "student" });
    } else {
    }
  } catch (er) {
    res.json(er);
  }
});

const verifyAdmin = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ message: "Wrong Admin" });
  } else {
    jwt.verify(token, process.env.admin_key, (err, decoded) => {
      if (err) {
        return res.json({ message: "Invalid Token" });
      } else {
        req.username = decoded.username;
        req.role = decoded.role;
        next();
      }
    });
  }
};

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ message: "Wrong User" });
  } else {
    jwt.verify(token, process.env.admin_key, (err, decoded) => {
      if (err) {
        jwt.verify(token, process.env.Student_key, (err, decoded) => {
          if (err) {
            return res.json({ message: "Invalid Token" });
          } else {
            req.username = decoded.username;
            req.role = decoded.role;
            next();
          }
        });
      } else {
        req.username = decoded.username;
        req.role = decoded.role;
        next();
      }
    });
  }
};

router.get("/verify", verifyUser, (req, res) => {
  return res.json({ login: true, role: req.role });
});

router.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ logout: true });
});

(module.exports = router), { verifyAdmin, verifyAdmin };
