import React from 'react'; 
import './App.css';
import Header from './Components/ApplicationLayout/Header/Header';
import NavigationBar from './Components/ApplicationLayout/NavigationBar/NavigationBar';
import HomePage from './Components/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Header/>
      <NavigationBar/>
      <HomePage/>
    </div>
  );
}

export default App;
