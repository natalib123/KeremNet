import React , {useState, useEffect} from 'react';
import Post from '../Post/Post';

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/posts')
    .then(response => response.json())
    .then(data => setPosts(data))
    .catch(error => console.error('Error fetching data'))
  });
  
  return (
    <ul>
        {posts.map(post => (
            <Post publisherName= {post["publisherName"]} 
              content= {post["postContent"]} 
              publishDate= {new Date(post["postDate"])}
              likes= {post["postLikes"]}
              comments= {post["postComments"]}/>
        ))}
    </ul>
  );
}

export default HomePage;