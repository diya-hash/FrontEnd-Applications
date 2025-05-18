import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { fetchCatFacts } from './api'
import { useEffect } from 'react'

function App() {
  const [catfact, setCatFact] = useState(null)

  useEffect(() => {
    fetchCatFacts().then(setCatFact).catch(console.error);
  }, []);

  return (
    <div style={{textAlign: 'center', marginTop: '50px'}}>
      <h2>Random Cat Fact</h2>
      {catfact ? (
        <div>
          <p>{catfact.fact}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default App
