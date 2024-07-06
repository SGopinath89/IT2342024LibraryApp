const mongoose = require("mongoose");

const bookschema = new mongoose.Schema({
  name: { type: String },
  author: { type: String, required: true },
  bookpath: { type: String, required: true },
  imageUrl: { type: String },
});

const bookmodel = mongoose.model("books", bookschema);

module.exports = bookmodel;
