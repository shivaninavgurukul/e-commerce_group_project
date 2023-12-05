"use client";
import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import "../globals.css";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=javascript';

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        // Limit to only 5 books
        setBooks(data.items ? data.items.slice(0, 10) : []);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
  <div>
    <Navbar/>
    <div className="product-container">
      <div className="product-list">
        {books.map((book) => (
          <div key={book.id} className="product-item">
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
            <p className='product-description'>
              {book.volumeInfo.description
                ? `${book.volumeInfo.description.substring(0, 150)}...`
                : 'No description available'}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Books;

