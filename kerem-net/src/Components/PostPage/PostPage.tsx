import React , {useState, useEffect} from 'react';
import Post from '../Post/Post';
import { PostDTO } from '../../DTOs/Post';
import './PostPage.css';

const PostPage: React.FC = () => {
    const [post, setPost] = useState<PostDTO>();

    useEffect(() => {
        fetch('http://localhost:3001/api/posts/id/1')
        .then(response => response.text())
        .then(data => setPost(JSON.parse(data)))
        .catch(error => console.error('Error fetching data'))
    });
    
    if (!post){
        return (<div className='posts'>
            <p>Post with ID 1 wasn't found yet!</p>
        </div>
        );
    }

    return (
    <div className='posts'>
        <Post publisherName= {post.publisherName} 
            content= {post.content} 
            publishDate= {new Date(post.date)}
            likes= {post.likes}
            comments= {post.comments}/>
    </div>
  );
}

export default PostPage;