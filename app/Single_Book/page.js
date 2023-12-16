// "use client"
// import React, { useEffect, useState } from 'react';
// import Link from 'next/link'; // Import Link from next/link

// "use client"
// import React, { useEffect, useState } from 'react';
// // import Link from 'next/link'; // Import Link from next/link

// const SingleBook = () => {
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
//         const fetchedBooks = data.items ? data.items.slice(0) : [];

//         // Set the first book as the initially selected book
//         if (fetchedBooks.length > 0) {
//           setSelectedBook(fetchedBooks[0]);
//         }

//         setBooks(fetchedBooks);
//       } catch (error) {
//         console.error('Error fetching data:', error.message);
//       }
//     };

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
//         <h1 className='category'>Books Data</h1>
//         {/* <Link href='/Books'>View All</Link>  */}
//       </div>
//       {selectedBook && (
//         <div className="product-item" onClick={() => handleProductClick(selectedBook)}>
//           <a href={`/Single_Book?id=${selectedBook.id}`} passHref>
//             <a>
//               {selectedBook.volumeInfo.imageLinks && (
//                 <img
//                   src={selectedBook.volumeInfo.imageLinks.thumbnail}
//                   alt={selectedBook.volumeInfo.title}
//                   className="product-image"
//                 />
//               )}
//               <h2 className="product-title">{selectedBook.volumeInfo.title}</h2>
//               <p className="product-authors">
//                 Authors: {selectedBook.volumeInfo.authors ? selectedBook.volumeInfo.authors.join(', ') : 'N/A'}
//               </p>
//             </a>
//           </a>
//         </div>
//       )}

//       <div className="product-list">
//         {books.map((book) => (
//           <div key={book.id} className="product-item" onClick={() => handleProductClick(book)}>
//             <a href={`/Single_Book?id=${book.id}`} passHref>
//               <a>
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
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SingleBook;

"use client"
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
        const fetchedBooks = data.items ? data.items.slice(0, 1) : []; // Only fetching the first book

        setBooks(fetchedBooks);
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
      </div>
      {selectedBook ? (
        <div className="product-details">
          <h2>{selectedBook.volumeInfo.title}</h2>
          <p>Authors: {selectedBook.volumeInfo.authors ? selectedBook.volumeInfo.authors.join(', ') : 'N/A'}</p>
          {/* Display other book details as needed */}
          <button onClick={handleCloseDetails}>Close Details</button>
          <div className="selected-book-details">
            <img
              src={selectedBook.volumeInfo.imageLinks.thumbnail}
              alt={selectedBook.volumeInfo.title}
              className="selected-book-image"
            />
            <h2 className="selected-book-title">{selectedBook.volumeInfo.title}</h2>
            <p className="selected-book-authors">
              Authors: {selectedBook.volumeInfo.authors ? selectedBook.volumeInfo.authors.join(', ') : 'N/A'}
            </p>
            {/* Add more details as needed */}
          </div>
        </div>
      ) : (
        <div className="product-list">
          {books.map((book) => (
            <div key={book.id} className="product-item" onClick={() => handleProductClick(book)}>
              <a>
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
      )}
    </div>
  );
};

export default SingleBook;
