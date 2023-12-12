import React, { useEffect, useState } from 'react';

const ProductData = () => {
  const apiUrl = 'https://fakestoreapi.com/products/category/jewelery';
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const items = data.items || [];

        const products = items.map(item => ({
          Title: item.volumeInfo.title,
          img: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : '',
          Price: item.saleInfo && item.saleInfo.listPrice ? item.saleInfo.listPrice.amount : 0,
          Des: item.volumeInfo.description || ''
        }));

        setProductData(products);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {productData.map((product, index) => (
          <li key={index}>
            <h2>{product.Title}</h2>
            <img src={product.img} alt={product.Title} />
            <p>Price: {product.Price}</p>
            <p>Description: {product.Des}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductData;
