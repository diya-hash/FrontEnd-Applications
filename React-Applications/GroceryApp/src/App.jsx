import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { fetchGroceryProducts } from './api'

function App() {
  const [groceryProducts, setGrocery] = useState([])

  useEffect(()=>{
    fetchGroceryProducts().then(setGrocery).catch(console.error);
  }, [])
  return (
    <div className='container'>
      <h1>Grocery Products</h1>
      {groceryProducts.length > 0 ? (
        <div className='grid'>
          {groceryProducts.map((groceryProduct, index) => (
            <div key={index} className='card'>
              <h3>{groceryProduct.title}</h3>
              <p>Price: {groceryProduct.price}</p>
            </div>
          ))}
        </div>
      ):(
        <p>Loading...</p>
      )} 
    </div>
  )
}

export default App
