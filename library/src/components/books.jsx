import axios from "axios";
import React, { useEffect, useState } from "react";
import BookCard from "./bookcard";
import "../css/book.css";

const Books = () => {
  const [books, SetBooks] = useState([]);
  useEffect(
    () => {
      axios
        .get("http://localhost:8080/book/booksadmin")
        .then((res) => {
          SetBooks(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    },
    [],
    []
  );
  return (
    <div className="booklist">
      <div className="booklist2">
        {books.map((book) => {
          return <BookCard key={book.id} book={book}></BookCard>;
        })}
      </div>
    </div>
  );
};

export default Books;
