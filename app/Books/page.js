
"use client"
// import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import "../globals.css";
import BookIdComponent from "./BookId";

const BooksPage = () => {
  // const router = useRouter(); // Use useRouter within a functional component
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

  return (
    <div>
      <div>
      </div>
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
      {selectedBook && <BookIdComponent book={selectedBook} />}
    </div>
  );
};

export default BooksPage;


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

// <<<<<<< HEAD
// "use client"
// import { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import '../globals.css';
// // import BookIdComponent from './BookId';
// // =======
// // "use client";
// // import React, { useEffect, useState } from 'react';
// // >>>>>>> db2751004f04337d0ef24ea01c2a37fde6b125e7

// const BooksPage = () => {
//   const [books, setBooks] = useState([]);
//   const [selectedBook, setSelectedBook] = useState(null);

//   useEffect(() => {
//     const apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=javascript';

// // Inside your fetchData function
// const fetchData = async () => {
//   try {
//     const response = await fetch(apiUrl);

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log(data); // Log the fetched data to investigate any issues
//     setBooks(data.items ? data.items.slice(0, 10) : []);
//   } catch (error) {
//     console.error('Error fetching data:', error.message);
//   }
// };


//     fetchData();
//   }, []);

//   const handleProductClick = (book) => {
//     setSelectedBook(book);
//   };

//   const handleCloseDetails = () => {
//     setSelectedBook(null);
//   };

//   return (
//     <div className="product-container">
//       <div>
//         {/* <h1 className='category'>Product Category</h1> */}
//         {/* <a className='view' href='viewall'>View All</a> */}
//         <a href='./Book' className='link'>View All</a>
//       </div>
//       <div className="product-list">
//         {books.map((book) => (
//           <div key={book.id} className="product-item" onClick={() => handleProductClick(book)}>
//             {book.volumeInfo.imageLinks && (
//               <img
//                 src={book.volumeInfo.imageLinks.thumbnail}
//                 alt={book.volumeInfo.title}
//                 className="product-image"
//               />
//             )}
//             <h2 className="product-title">{book.volumeInfo.title}</h2>
//             <p className="product-authors">
//               Authors: {book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'N/A'}
//             </p>
//           </div>
//         ))}
//       </div>
//       {selectedBook && (
//         <div className="product-details">
//           <h2>{selectedBook.volumeInfo.title}</h2>
//           <p>Authors: {selectedBook.volumeInfo.authors ? selectedBook.volumeInfo.authors.join(', ') : 'N/A'}</p>
//           {/* Display other details as needed */}
//           <button onClick={handleCloseDetails}>Close Details</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BooksPage;
