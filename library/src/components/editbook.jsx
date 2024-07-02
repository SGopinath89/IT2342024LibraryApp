import React, { useEffect, useState } from "react";
import "../css/addbook.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditBook = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:8080/book/book/" + id)
      .then((res) => {
        setName(res.data.name);
        setAuthor(res.data.author);
        setImageUrl(res.data.imageUrl);
      })
      .catch((err) => console.log(err)); // Check for errors
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8080/book/book/" + id, { name, author, imageUrl })
      .then((res) => {
        if (res.data.updated) {
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
        <h2>Edit Book</h2>
        <div className="book">
          <label htmlFor="name">Book Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="book">
          <label htmlFor="author">Author Name:</label>
          <input
            type="text"
            id="author"
            name="auhtor"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="book">
          <label htmlFor="image">Book Image URL:</label>
          <input
            type="text"
            id="image"
            name="image"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>

        <button type="submit" className="submitbutton">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditBook;
