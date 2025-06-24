import React from 'react';
import './App.css';
import keremNet from './Assets/keremnet.png';
import HomePage from './Components/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <header>
        <img src= {keremNet}/>
        <h1>Welcome to Kerem Net!</h1>
      </header>
      <HomePage/>
    </div>
  );
}

export default App;
