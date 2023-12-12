import React, { useEffect, useState } from 'react';

const ProductList = ({ productData: propProductData }) => {
  const [internalProductData, setInternalProductData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    setInternalProductData(propProductData);
  }, [propProductData]);

  const handleViewClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="container">
      {internalProductData.map((curElm) => (
        <div key={curElm.Title} className="box">
          <div className="contant">
            <div className="img-box">
              <img src={curElm.img} alt={curElm.Title}></img>
            </div>
            <div className="deatils">
              <div className="info">
                <h3>{curElm.title}</h3>
                <p>{curElm.id}</p>
              </div>
              <button onClick={() => handleViewClick(curElm)}>View</button>
            </div>
          </div>
        </div>
      ))}

      {selectedProduct && (
        <div className="detailed-info">
          <h2>{selectedProduct.title}</h2>
          <img src={selectedProduct.img} alt={selectedProduct.title}></img>
          <p>ID: {selectedProduct.id}</p>
          {/* Add other details as needed */}
          <button onClick={() => setSelectedProduct(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
