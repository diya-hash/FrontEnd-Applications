import { useEffect, useState } from 'react';
import { fetchRandomUser } from './api';
import './App.css'

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchRandomUser().then(setUser).catch(console.error);
  }, []);
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Random User</h1>
      {user ? (
        <div>
          <img src={user.picture.large} alt="User" />
          <h2>{`${user.name.first} ${user.name.last}`}</h2>
          <p>Email: {user.email}</p>
          <p>Location: {user.location.city}, {user.location.country}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App
