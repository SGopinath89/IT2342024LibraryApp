import React, { useState, useEffect } from "react";
import axios from "axios";
import BookCard2 from "./bookcard2"; // Assuming you have a BookCard2 component
import "../css/book2.css"; // Assuming you have a CSS file for styling

const Books2 = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchBooks(); // Initial fetch of all books
  }, []);

  const fetchBooks = () => {
    axios
      .get("http://localhost:8080/book/booksstudent")
      .then((res) => {
        setBooks(res.data);
        console.log("Fetched books:", res.data); // Log fetched data
      })
      .catch((err) => {
        console.error("Error fetching books:", err);
        setBooks([]); // Reset books array on error
      });
  };

  const searchBooks = () => {
    if (!searchQuery.trim()) {
      alert("Please enter a search query");
      return;
    }
    axios
      .get(`http://localhost:8080/student/search`, {
        params: { bookname: searchQuery },
      })
      .then((res) => {
        setBooks(res.data);
        console.log("Searched books:", res.data);
      })
      .catch((err) => {
        console.error("Error searching books:", err);
        setBooks([]);
      });
  };

  const resetSearch = () => {
    fetchBooks();
    setSearchQuery("");
  };

  return (
    <div className="booklist">
      <div className="Search">
        Search Books:
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="button" onClick={searchBooks}>
          Search
        </button>
        <button type="button" onClick={resetSearch}>
          Reset
        </button>
      </div>
      <div className="booklist2">
        {books.length > 0 ? (
          books.map((book) => <BookCard2 key={book._id} book={book} />)
        ) : (
          <p>No books found</p>
        )}
      </div>
    </div>
  );
};

export default Books2;
