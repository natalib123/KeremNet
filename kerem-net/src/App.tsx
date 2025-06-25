import React from 'react'; 
import './App.css';
import Header from './Components/ApplicationLayout/Header';
import HomePage from './Components/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Header/>
      <HomePage/>
    </div>
  );
}

export default App;
