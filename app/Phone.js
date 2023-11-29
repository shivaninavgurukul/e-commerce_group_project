"use client";
import React, { useEffect, useState } from 'react';

const Phone = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/photos';

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        // Limiting to only 5 products and extracting required fields
        const formattedData = data.slice(0, 5).map(photo => ({
          title: `Product ${photo.id}`,
          description: `Description for Product ${photo.id}`,
          image: photo.url
        }));

        setProducts(formattedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="product-container">
      <h1 className="product-title">Best Phones Product
        <a href='/#' className='link'>View Link</a>
      </h1>
      <div className="product-list">
        {loading ? (
          <p>Loading...</p>
        ) : (
          products.map((product, index) => (
            <div key={index} className="product-item">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
              <h2 className="product-title">{product.title}</h2>
              <p className="product-description">{product.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Phone;
