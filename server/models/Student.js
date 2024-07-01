const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  reg_number: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  grade: { type: String },
});

const studentmodel = mongoose.model("students", studentSchema);

module.exports = studentmodel;
