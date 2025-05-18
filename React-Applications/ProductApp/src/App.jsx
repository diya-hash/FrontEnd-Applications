import { useEffect, useState } from 'react'
import './App.css'
import { fetchProducts } from './api';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts).catch(console.error)
  }, [])

  return (
    <div className="container">
      <h1>Products</h1>
      {products.length > 0 ? (
        <div className='grid'>
        {products.map( (product, index) => (
          <div key={index} className="card">
            <h3>{product.title}</h3>
            <p>Price: {product.price}</p>
          </div>
        ))}
      </div>
      ) : (
       <p>Loading...</p>
      )}
    </div>
  );
}

export default App
