// // "use client"
// // import { useRouter } from 'next/router';
// // import React, { useEffect, useState } from 'react';
// // import Navbar from '../Navbar';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import 'bootstrap/dist/css/bootstrap.css';
// // import "../globals.css";
// // import BookIdComponent from "./BookId";
// // import Link from 'next/link';

// // const BooksPage = () => {
// //   const router = useRouter(); // Use useRouter within a functional component
// //   const [books, setBooks] = useState([]);
// //   const [selectedBook, setSelectedBook] = useState(null);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=javascript';
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

// //   const handleClick = async (item) => {
// //     console.log(`Clicked book with ID: ${item.id}`);
// //     try {
// //       const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${item.id}`);

// //       if (!response.ok) {
// //         throw new Error(`HTTP error! Status: ${response.status}`);
// //       }

// //       const data = await response.json();
// //       setSelectedBook(data);
// //       router.push(`/books/${item.id}`); // Use router.push to navigate
// //     } catch (error) {
// //       console.error('Error fetching book details:', error.message);
// //     }
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
// //       {selectedBook && <BookIdComponent book={selectedBook} />}
// //     </div>
// //   );
// // };

// // export default BooksPage;


// "use client"
// import { useEffect, useState } from 'react';
// import Navbar from '../Navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import '../globals.css';
// import BookIdComponent from './BookId';

// const BooksPage = () => {
//   const [books, setBooks] = useState([]);
//   const [selectedBook, setSelectedBook] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=javascript';
//         const response = await fetch(apiUrl);

//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         setBooks(data.items ? data.items.slice(0, 10) : []);
//       } catch (error) {
//         console.error('Error fetching data:', error.message);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     const router = require('next/router').default;
//     const handleClick = async (item) => {
//       console.log(`Clicked book with ID: ${item.id}`);
//       try {
//         const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${item.id}`);

//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         setSelectedBook(data);
//         router.push(`/books/${item.id}`); // Use router.push to navigate
//       } catch (error) {
//         console.error('Error fetching book details:', error.message);
//       }
//     };

//     document.querySelectorAll('.product-list > div').forEach((item, index) => {
//       item.addEventListener('click', () => {
//         const book = books[index];
//         handleClick(book);
//       });
//     });

//     return () => {
//       document.querySelectorAll('.product-list > div').forEach((item) => {
//         item.removeEventListener('click', handleClick);
//       });
//     };
//   }, [books]);

//   return (
//     <div>
//       <div>
//         <Navbar />
//       </div>
//       <div className="product-container">
//         <div className="product-list">
//           {books?.map((item, index) => (
//             <div key={index}>
//               <img
//                 src={item.volumeInfo.imageLinks.thumbnail}
//                 alt={item.volumeInfo.title}
//                 className="product-image"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//       {selectedBook && <BookIdComponent book={selectedBook} />}
//     </div>
//   );
// };

// export default BooksPage;

"use client"
// "use client"
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../globals.css';
import BookIdComponent from './BookId';

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=javascript';
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

  useEffect(() => {
    // Import useRouter conditionally to avoid server-side usage
    const router = require('next/router').default;

    const handleClick = async (item) => {
      console.log(`Clicked book with ID: ${item.id}`);
      try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${item.id}`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setSelectedBook(data);
        router.push(`/books/${item.id}`); // Use router.push to navigate
      } catch (error) {
        console.error('Error fetching book details:', error.message);
      }
    };

    document.querySelectorAll('.product-list > div').forEach((item, index) => {
      item.addEventListener('click', () => {
        const book = books[index];
        handleClick(book);
      });
    });

    return () => {
      document.querySelectorAll('.product-list > div').forEach((item) => {
        item.removeEventListener('click', handleClick);
      });
    };
  }, [books]);

  return (
    <div>
      <div className="product-container">
        <div className="product-list">
          {books?.map((item, index) => (
            <div key={index}>
              <img
                src={item.volumeInfo.imageLinks.thumbnail}
                alt={item.volumeInfo.title}
                className="product-image"
              />
            </div>
          ))}
        </div>
      </div>
      {selectedBook && <BookIdComponent book={selectedBook} />}
    </div>
  );
};

export default BooksPage;
