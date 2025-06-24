import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import keremNet from './Assets/keremnet.png';
import Post from './Components/Post/Post';

function App() {
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
