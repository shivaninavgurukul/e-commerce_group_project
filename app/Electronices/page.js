"use client"
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import "../globals.css";
const Electronics = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = 'https://api.escuelajs.co/api/v1/categories';

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Limit the categories to only 5
        const formattedData = data.slice(0, 10).map(category => ({
          id: category.id,
          name: category.name,
          image: category.image
        }));

        setCategories(formattedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching categories:', error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
    <div className="product-container">
      <div className="product-list">
        {loading ? (
          <p>Loading...</p>
        ) : (
          categories.map(category => (
            <div key={category.id} className="product-item">
              <img
                src={category.image}
                alt={category.name}
                className="product-image"
              />
              <h2 className="product-title">{category.name}</h2>
            </div>
          ))
        )}
      </div>
    </div>
  </div>
  );
};

export default Electronics;
