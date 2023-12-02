// pages/books.js
import React from 'react';
import Navbar from '../Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import "../globals.css";
import BookId from "./BookId"; 

const BooksPage = ({ books }) => {
  const handleClick = (item) => {
    console.log(`Clicked book with ID: ${item.id}`);
  };

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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BooksPage;

export async function getStaticProps() {
  const apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=javascript';

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const books = data.items ? data.items.slice(0, 10) : [];

    return {
      props: {
        books,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return {
      props: {
        books: [],
      },
    };
  }
}
