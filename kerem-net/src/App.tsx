import React from 'react'; 
import './App.css';
import AppLayout from './Components/ApplicationLayout/AppLayout';
import HomePage from './Components/HomePage/HomePage';
import PostPage from './Components/PostPage/PostPage';

function App() {
  return (
    <div className="App">
      <AppLayout/>
      <HomePage/>
    </div>
  );
}

export default App;
