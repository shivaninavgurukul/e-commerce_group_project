import React from "react";
import ProductList from "./ProductList.js";

const Data = () => {
  // Assuming ProductList is a component that receives productData as a prop
  const productData = [
    // your product data array here
  ];

  return (
    <>
      <div className="container">
        <ProductList productData={productData} />
      </div>
    </>
  );
};

export default Data;
