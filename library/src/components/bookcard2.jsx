import React from "react";
import "../css/book2.css";
import { Link } from "react-router-dom";

const BookCard2 = ({ book }) => {
  const { name, author, bookpath, imageUrl } = book;

  return (
    <div className="bookcard">
      <img src={imageUrl} alt={name} className="bookimage" />
      <div className="bookdet">
        <h2>{name}</h2>
        <p>{author}</p>
      </div>
      <div className="bookactions">
        <button className="btn1">
          <Link to={bookpath}>View</Link>
        </button>
      </div>
    </div>
  );
};

export default BookCard2;
