import React , {useState, useEffect} from 'react';
import Post from '../Post/Post';
import { PostDTO } from '../../DTOs/Post';
import './HomePage.css';

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState<PostDTO[]>([]);

  useEffect(() => {
      fetch('http://localhost:3001/posts')
      .then(response => response.text())
      .then(data => setPosts(JSON.parse(data)))
      .catch(error => console.error('Error fetching data'))
  });

  console.log(posts);

  return (
    <div className='posts'>
      <ul>
        {posts.map(post => (
            <Post publisherName= {post.publisherName} 
              content= {post.postContent} 
              publishDate= {post.postDate}
              likes= {post.postLikes}
              comments= {post.postComments}/>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;