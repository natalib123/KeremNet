import React from 'react';
import logo from './logo.svg';
import './App.css';
import keremNet from './keremnet.png';
import Post from './Post/post';

function App() {
  let publisher = 'Natali';
  let postContent = 'My FIRST Post';
  let postComments = ['niceee', 'coolll', '6 out of 6!'];
  let postLikes = 6;
  let postDate = new Date();
  return (
    <div className="App">
      <header>
        <img src= {keremNet}/>
        <h1>Welcome to Kerem Net!</h1>
      </header>
      <Post publisherName={publisher} 
            content={postContent} 
            comments={postComments}
            likes={postLikes}
            publishDate={postDate}
      />
    </div>
  );
}

export default App;
