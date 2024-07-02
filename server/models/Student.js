const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  reg_number: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  academicyear: { type: String },
});

const studentmodel = mongoose.model("students", studentSchema);

module.exports = studentmodel;
