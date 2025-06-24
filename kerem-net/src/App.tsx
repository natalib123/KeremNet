import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import keremNet from './Assets/keremnet.png';
import Post from './Components/Post/Post';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/posts')
    .then(response => response.json())
    .then(data => setPosts(data))
    .catch(error => console.error('Error fetching data'))
  });

  return (
    <div className="App">
      <header>
        <img src= {keremNet}/>
        <h1>Welcome to Kerem Net!</h1>
      </header>
    </div>
  );
}

export default App;
