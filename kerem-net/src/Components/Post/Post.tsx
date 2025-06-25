import React from "react";
import PublisherName from "../PublisherName/PublisherName";
import Content from "../Content/Content";
import Comments from "../Comments/Comments";
import Likes from "../Likes/Likes";
import PublishDate from "../PublishDate/PublishDate";
import './Post.css';

interface PostProps{
    publisherName: string;
    content: string;
    comments: string[];
    likes: number;
    publishDate: string;
};

const Post: React.FC<PostProps> = (props: PostProps) => {
    return(<div className="post">
        <PublisherName name={props.publisherName} />
        <Content text={props.content}/>
        <PublishDate dateTime={props.publishDate}/>
        <Likes amount={props.likes}/>
        <Comments comments={props.comments}/>
    </div>);
};

export default Post;