// import React, { useEffect, useState } from 'react';

// const Phone = () => {
//   const [phones, setPhones] = useState([]);

//   useEffect(() => {
//     const apiUrl = 'https://api.escuelajs.co/api/v1/products';

//     const fetchData = async () => {
//       try {
//         const response = await fetch(apiUrl);

//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         // Limit to only 5 phones
//         setPhones(data.slice(0, 5));
//       } catch (error) {
//         console.error('Error fetching data:', error.message);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="product-container">
//       <h1 className="product-title">Featured Phones</h1>
//       <div className="product-list">
//         {phones.map((phone) => (
//           <div key={phone.id} className="product-item">
//             {phone.image && (
//               <img
//                 src={phone.image}
//                 alt={phone.title}
//                 className="product-image"
//               />
//             )}
//             <h2 className="product-title">{phone.title}</h2>
//             <p className="product-price">
//               Price: {phone.price ? `$${phone.price.toFixed(2)}` : 'N/A'}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Phone;


// Product.js or Phone.js

// Product.js or Phone.js
"use client "

import React, { useEffect, useState } from 'react';

const Phone = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://mobile-phone-specs-database.p.rapidapi.com/gsm/all-brands';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '54facd08b7msh6eed8d352c42f44p1e7e58jsn18af0f3c851b',
        'X-RapidAPI-Host': 'mobile-phone-specs-database.p.rapidapi.com'
      }
    };

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl, options);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        // Limit to only 1 phone for simplicity
        setPhones(data.slice(0, 1));
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="product-container">
      <h1 className="product-title">Featured Phone</h1>
      <div className="product-list">
        {phones.map((phone) => (
          <div key={phone.DeviceName} className="product-item">
            {phone.imageURL ? (
              <img
                src="https://icon2.cleanpng.com/20180325/rhw/kisspng-iphone-4-iphone-8-plus-iphone-5-iphone-x-iphone-apple-5ab72c725c8cd3.9515278215219539063791.jpg"
                alt={phone.DeviceName}
                className="product-image"
              />
            ) : (
              <div className="product-no-image">No Image Available</div>
            )}
            <div className="product-details">
              <h2 className="product-title">{phone.DeviceName}</h2>
              <p className="product-brand">Brand: {phone.Brand}</p>
              {/* Add more details as needed */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Phone;

