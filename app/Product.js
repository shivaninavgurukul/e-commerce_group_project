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
//         setBooks(data.items || []);
//       } catch (error) {
//         console.error('Error fetching data:', error.message);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="product-container">
//       <h1 className="product-title">Featured Books</h1>
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

import React, { useEffect, useState } from 'react';

const Product = () => {
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
        setBooks(data.items ? data.items.slice(0, 5) : []);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="product-container">
      
        <h1 className="product-title">Featured Books
        <a href='./Books' className='link'>View All</a>
        </h1>
      
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;



