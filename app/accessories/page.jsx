'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Accessories = () => {
  const [accessories, setAccessories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAccessories = async () => {
      try {
        const response = await axios.get('http://localhost:3001/accessory/get');
        setAccessories(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching accessories:', error);
        setLoading(false);
      }
    };

    fetchAccessories();
  }, []);

  if (loading) return <div>Loading accessories...</div>;

  return (
    <div>
      <h2>Accessories</h2>
      {accessories.length === 0 ? (
        <p>No accessories found.</p>
      ) : (
        <ul>
          {accessories.map(accessory => (
            <li key={accessory.id}>
              <h3>{accessory.name}</h3>
              <p>{accessory.description}</p>
              <p><strong>Price:</strong> ₹{accessory.sellingPrice}</p>
              {accessory.images?.length > 0 && (
                <img
                  src={accessory.images[0].url}
                  alt={accessory.images[0].alt || accessory.name}
                  width={150}
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Accessories;
