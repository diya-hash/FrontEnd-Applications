import { useEffect, useState } from 'react'
import './App.css'
import { fetchProducts } from './api';

function ProductApp(){
    const [products, setProducts] = useState([]);
    const [filterText, setFilterText] = useState('');
    useEffect(() => {
      fetchProducts().then(setProducts).catch(console.error);
    }, [])

    const filteredProducts = products.filter(product => {
      const matchTitle = product.title.toLowerCase().includes(filterText.toLowerCase());
      return matchTitle;
    });
 return(
  <div>
    <h1>Products title</h1>
    <div>
      <input
        type='text'
        placeholder='Search by title'
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      
    </div>
    {filterText ? (
    filteredProducts.length > 0 ? (
      <ul style={{listStyle:'none', padding: 0}}>
        {filteredProducts.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    ):(
      <p>Loading...</p>
    )
    ): null}
    
  </div>
 )
}
export default ProductApp
