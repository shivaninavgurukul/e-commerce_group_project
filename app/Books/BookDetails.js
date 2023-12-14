"use client";
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useParams } from 'react-router-dom';


  const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    const apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=javascript';

const fetchData = async () => {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data); 
    setBooks(data.items ? data.items.slice(0, 10) : []);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
};


    fetchData();
  }, []);

  const handleProductClick = (book) => {
    setSelectedBook(book);
  };

  const handleCloseDetails = () => {
    setSelectedBook(null);
  };

  
  return (
    <Router>
      <div className="product-container">
        <div></div>
        <div className="product-list">
          {books.map((book) => (
            <Link to={`/books/${book.id}`} key={book.id} className="product-item">
              <div className="product-item">
                {/* Book item content */}
              </div>
            </Link>
          ))}
        </div>
        {/* Routes for displaying book details */}
        <Switch>
          <Route path="/books/:id">
            {/* Render BookDetails component and pass necessary props */}
            <BookDetails books={books} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default BooksPage;

