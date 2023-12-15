
// // import React, { useEffect, useState } from "react";
// // import { useHistory } from "react-router-dom";
// // import Navbar from "../Navbar";
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import 'bootstrap/dist/css/bootstrap.css';
// // import "../globals.css";

// // const BooksPage = () => {
// //   const [books, setBooks] = useState([]);
// //   const history = useHistory();

// //   useEffect(() => {
// //     const apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=javascript';

// //     const fetchData = async () => {
// //       try {
// //         const response = await fetch(apiUrl);

// //         if (!response.ok) {
// //           throw new Error(`HTTP error! Status: ${response.status}`);
// //         }

// //         const data = await response.json();
// //         setBooks(data.items ? data.items.slice(0, 10) : []);
// //       } catch (error) {
// //         console.error('Error fetching data:', error.message);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   const handleClick = (item) => {
// //     // Handle navigation to the book details page here
// //     history.push(`/books/${item.id}`);
// //   };

// //   return (
// //     <div>
// //       <div>
// //         <Navbar />
// //       </div>
// //       <div className="product-container">
// //         <div className="product-list">
// //           {books?.map((item, index) => (
// //             <div key={index} onClick={() => handleClick(item)}>
// //               <img
// //                 src={item.volumeInfo.imageLinks.thumbnail}
// //                 alt={item.volumeInfo.title}
// //                 className="product-image"
// //               />
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default BooksPage;


"use client"
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import "../globals.css";

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

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
    // Handle navigation to the book details page here
    navigate(`/books/${item.id}`);
  };

  return (
    <div>
      <div className="product-container">
        <div className="product-list">
          {books?.map((item, index) => (
            <div key={index} onClick={() => handleClick(item)}>
              <img
                src={item.volumeInfo.imageLinks.thumbnail}
                alt={item.volumeInfo.title}
                className="product-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BooksPage;
