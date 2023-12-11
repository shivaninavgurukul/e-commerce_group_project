"use client"
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import "../globals.css";

const Phone = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://makeup-api.herokuapp.com/api/v1/products.json';

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        // Limit to only 5 products
        setProducts(data.slice(55,550));
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
  <div>
    <div className="product-container">
      <h1 className="product-title">Makeup Product
     </h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            {product.image_link && (
              <img
                src={product.image_link}
                alt={product.name}
                className="product-image"
              />
            )}
            <h2 className="product-title">{product.name}</h2>
            <p className="product-brand">Brand: {product.brand}</p>
            <p className="product-description">
              {product.description
                ? `${product.description.substring(0, 150)}...`
                : 'No description available'}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Phone;

// "use client";
// import React, { useEffect, useState } from 'react';

// const Phone = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const apiUrl = 'https://makeup-api.herokuapp.com/api/v1/products.json';

//     const fetchData = async () => {
//       try {
//         const response = await fetch(apiUrl);

//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         setProducts(data);
//       } catch (error) {
//         console.error('Error fetching data:', error.message);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="product-container">
//       <div className="product-list">
//         {products.map((product) => (
//           <div key={product.id} className="product-item">
//             {product.image_link && (
//               <img
//                 src={product.image_link}
//                 alt={product.name}
//                 className="product-image"
//               />
//             )}
//             <h2 className="product-title">{product.name}</h2>
//             <p className="product-brand">Brand: {product.brand}</p>
//             <p className="product-description">
//               {product.description
//                 ? `${product.description.substring(0, 150)}...`
//                 : 'No description available'}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Phone;

