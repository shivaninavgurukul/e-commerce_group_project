// "use client"
// // import React from 'react';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// // import Product from './Product';
// // import Home from './Home';
// // import ViewAllBooks from './ViewAllBooks';
// import React, { useEffect, useState } from 'react';

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
//     // Import useRouter conditionally to avoid server-side usage
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

// // import React from 'react';
// // import BooksPage from './BooksPage';

// // const Index = () => {
// //   return (
// //     <div>
// //       <h1>My Next.js App</h1>
// //       <BooksPage />
// //     </div>
// //   );
// // };

// // export default Index;