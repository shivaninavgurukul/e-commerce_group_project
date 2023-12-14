"use client";
import React, { useEffect, useState } from 'react';

const SingleBook = () => {
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
    <div className="product-container">
      <div>
        {/* <h1 className='category'>Product Category</h1> */}
        {/* <a className='view' href='viewall'>View All</a> */}
        {/* <a href='./Books' className='link'>View All</a> */}
      </div>
      <div className="product-list">
        {books.map((book) => (
          <div key={book.id} className="product-item" onClick={() => handleProductClick(book)}>
            {book.volumeInfo.imageLinks && (
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={book.volumeInfo.title}
                className="product-image"
              />
            )}
            <h2 className="product-title">{book.volumeInfo.title}</h2>
            <p className="product-authors">
              Authors: {book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'N/A'}
            </p>
          </div>
        ))}
      </div>
      {selectedBook && (
        <div className="product-details">
          <h2>{selectedBook.volumeInfo.title}</h2>
          <p>Authors: {selectedBook.volumeInfo.authors ? selectedBook.volumeInfo.authors.join(', ') : 'N/A'}</p>
          {/* Display other details as needed */}
          <button onClick={handleCloseDetails}>Close Details</button>
        </div>
      )}
    </div>
  );
};

export default SingleBook;
