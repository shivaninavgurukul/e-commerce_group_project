// import React, { useEffect, useState } from 'react';

// const Product = () => {
//   const [books, setBooks] = useState([]);
//   const [selectedBook, setSelectedBook] = useState(null);

//   useEffect(() => {
//     const apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=javascript';

//     const fetchData = async () => {
//       try {
//         const response = await fetch(apiUrl);

//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         // Limit to only 5 books
//         setBooks(data.items ? data.items.slice(0, 5) : []);
//       } catch (error) {
//         console.error('Error fetching data:', error.message);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleClick = (book) => {
//     setSelectedBook(book);
//   };

//   return (
//     <div className="product-container">
//       <h1 className="product-title">
//         Featured Books
//         <a href="./Books" className="link">
//           View All
//         </a>
//       </h1>

//       <div className="product-list">
//         {books.map((book) => (
//           <div key={book.id} className="product-item" onClick={() => handleClick(book)}>
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
//         </div>
//       )}
//     </div>
//   );
// };

// export default Product;



// import Link from 'next/link';
// import React, { useEffect, useState } from 'react';

// const Product = () => {
//     const [books, setBooks] = useState([]);

//   useEffect(() => {
//     const apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=javascript';

//     const fetchData = async () => {
//       try {
//         const response = await fetch(apiUrl);

//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         setBooks(data.items || []);
//       } catch (error) {
//         console.error('Error fetching data:', error.message);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="product-container">
      
//       <h1 className="product-title">
//         Featured Books
//         {/* Remove the direct link here */}
//       </h1>
//       <div className="product-list">
//         {books.map((book) => (
//           <div key={book.id} className="product-item">
//             {/* Wrap each book item with a Link */}
//             {/* <Link href={`/books/${book.id}`} key={book.id}> */}
//               <a className="book-link">
//                 {book.volumeInfo.imageLinks && (
//                   <img
//                     src={book.volumeInfo.imageLinks.thumbnail}
//                     alt={book.volumeInfo.title}
//                     className="product-image"
//                   />
//                 )}
//                 <h2 className="product-title">{book.volumeInfo.title}</h2>
//                 <p className="product-authors">
//                   Authors: {book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'N/A'}
//                 </p>
//               </a>
//             {/* </Link> */}
           
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Product;

// <<<<<<< HEAD
// import React, { useEffect, useState } from 'react';

// const Product = () => {
//   const [books, setBooks] = useState([]);
// =======

// import React, { useEffect, useState } from 'react';

// const Product = () => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     const apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=javascript';

//     const fetchData = async () => {
//       try {
//         const response = await fetch(apiUrl);

//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         // Limit to only 5 books
//         setBooks(data.items ? data.items.slice(0, 5) : []);
//       } catch (error) {
//         console.error('Error fetching data:', error.message);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="product-container">
      
//         <h1 className="product-title">Featured Books
//         <a href='./Books' className='link'>View All</a>
//         </h1>
      
//       <div className="product-list">
//         {books.map((book) => (
//           <div key={book.id} className="product-item">
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
//     </div>
//   );
// };

// export default Product;

"use client";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Product = () => {

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
        // Limit to only 5 books
        setBooks(data.items ? data.items.slice(0, 5) : []);
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
        <h1 className='category'>Books Data</h1>
        <a href='./Books' className='link'>View All</a>
      </div>
      <div className="product-list">
        {books.map((book) => (
          <div key={book.id} className="product-item" onClick={() => handleProductClick(book)}>
            <a href="./Single_Book">
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
            </a>
          </div>
        ))}
      </div>

      {selectedBook && (
        <div className="product-details">
          <h2>{selectedBook.volumeInfo.title}</h2>
          <p>Authors: {selectedBook.volumeInfo.authors ? selectedBook.volumeInfo.authors.join(', ') : 'N/A'}</p>
          <button onClick={handleCloseDetails}>Close Details</button>
        </div>
      )}
    </div>
  );
};

export default Product;
