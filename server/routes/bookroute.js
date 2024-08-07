const express = require("express");
const bookmodel = require("../models/book.js");
const router = express.Router();
const verifyAdmin = require("../security/adminauth.js");

//add book and verifyadmin again while adding the book. it means Admin can only add the books to the website
router.post("/add", verifyAdmin, async (req, res) => {
  try {
    const { name, author, bookpath, imageUrl } = req.body;
    const newbook = new bookmodel({
      name,
      author,
      bookpath,
      imageUrl,
    });
    await newbook.save(); //save the new book to the database
    return res.json({ added: true }); //this is response of console message after successfully added new book to system
  } catch (err) {
    return res.json({ message: "Error in Adding Book" }); //this is error message of while adding the book to system
  }
});

//add book get method for admin (only admin token can access this)
router.get("/booksadmin", verifyAdmin, async (req, res) => {
  try {
    const books = await bookmodel.find();
    return res.json(books);
  } catch (err) {
    return res.json(err);
  }
});
//books for student
router.get("/booksstudent", async (req, res) => {
  try {
    const books = await bookmodel.find();
    return res.json(books);
  } catch (err) {
    return res.json(err);
  }
});

//edit book get method
router.get("/book/:id", verifyAdmin, async (req, res) => {
  try {
    const id = req.params.id;
    const books = await bookmodel.findById({ _id: id });
    return res.json(books);
  } catch (err) {
    return res.json(err);
  }
});
//this is put method for updating book only admin can update
router.put("/book/:id", verifyAdmin, async (req, res) => {
  try {
    const id = req.params.id;
    const book = await bookmodel.findByIdAndUpdate({ _id: id }, req.body);
    return res.json({ updated: true, book });
  } catch (err) {
    return res.json(err);
  }
});

//only admin can delete books
router.delete("/book/:id", verifyAdmin, async (req, res) => {
  try {
    const id = req.params.id;
    const book = await bookmodel.findByIdAndDelete({ _id: id });
    return res.json({ deleted: true, book });
  } catch (err) {
    return res.json(err);
  }
});
module.exports = router;
