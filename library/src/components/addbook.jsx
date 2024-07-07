import React, { useState } from "react";
import "../css/addbook.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Addbook = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [bookpath, setbookpath] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/book/add", {
        name,
        author,
        bookpath,
        imageUrl,
      })
      .then((res) => {
        if (res.data.added) {
          navigate("/books");
        } else {
          console.log(res);
        }
      })
      .catch((err) => console.log(err)); // Check for errors
  };

  return (
    <div className="bookcontainer">
      <form className="bookform" onSubmit={handleSubmit}>
        <h2>Add Book</h2>
        <div className="book">
          <label htmlFor="name">Book Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="book">
          <label htmlFor="author">Author Name:</label>
          <input
            type="text"
            id="author"
            name="auhtor"
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="book">
          <label htmlFor="path">Book Path URL:</label>
          <input
            type="text"
            id="path"
            name="path"
            onChange={(e) => setbookpath(e.target.value)}
          />
        </div>
        <div className="book">
          <label htmlFor="image">Book Image URL:</label>
          <input
            type="text"
            id="image"
            name="image"
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>

        <button type="submit" className="submitbutton">
          Add
        </button>
      </form>
    </div>
  );
};

export default Addbook;
