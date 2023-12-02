"use client"
import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import "../globals.css";
import BookIdComponent from "./BookId"; // Renamed the import to BookIdComponent

const BooksPage = () => {
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
        setBooks(data.items ? data.items.slice(0, 10) : []);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);
  
  const handleClick = (item) => {
    // Handle navigation or any other action here
    console.log(`Clicked book with ID: ${item.id}`);
  }

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="product-container">
        <div className="product-list">
          {books?.map((item, index) => {
            return (
              <div key={index} onClick={() => handleClick(item)}>
                <img
                  src={item.volumeInfo.imageLinks.thumbnail}
                  alt={item.volumeInfo.title}
                  className="product-image"
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default BooksPage; // Export the component with the updated name
