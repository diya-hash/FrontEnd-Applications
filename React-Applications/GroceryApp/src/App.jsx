import React, { useState, useEffect } from 'react';
import { fetchGroceryProducts } from './api';

const GroceryList = () => {
  const [groceryProducts, setGroceryProducts] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    fetchGroceryProducts()
      .then(setGroceryProducts)
      .catch((err) => console.error("Error fetching:", err));
  }, []);

  const filteredProducts = groceryProducts.filter(product => {
    const matchesTitle = product.title.toLowerCase().includes(filterText.toLowerCase());
    const matchesPrice = maxPrice === '' || product.price <= parseFloat(maxPrice);
    return matchesTitle && matchesPrice;
  });

  return (
    <div className='container'>
      <h1>Grocery Products</h1>

      {/* Filter Controls */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search by title"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      {/* Product Display */}
      {filteredProducts.length > 0 ? (
        <div className='grid'>
          {filteredProducts.map((groceryProduct, index) => (
            <div key={index} className='card'>
              <h3>{groceryProduct.title}</h3>
              <p>Price: ${groceryProduct.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No products match the filter.</p>
      )}
    </div>
  );
};

export default GroceryList;
