import { useEffect, useState } from 'react'
import './App.css'
import { fetchProducts } from './api';

function App() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProducts().then(setProduct).catch(console.error);
  }, []);
  return (
    <div style={{textAlign: 'center', marginTop: '50px'}}>
      <h1>Random product</h1>
      {product ? (
        <div>
          <h2>{`${product.title}`}</h2>
          <p>Title: {product.title}</p>
          <p>Price: {product.price}</p>
        </div>
      ) : (
       <p>Loading...</p>
      )}
    </div>
  );
}

export default App
