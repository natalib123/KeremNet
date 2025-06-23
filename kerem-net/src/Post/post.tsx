import React from "react";
import Content from "./content";
import PublisherName from "./publisher-name";
import Comments from "./comments";
import Likes from "./likes";
import PublishDate from "./publish-date";
import './post.css';

interface PostInfo{
    publisherName: string;
    content: string;
    comments: string[];
    likes: number;
    publishDate: Date;
};

const Post: React.FC<PostInfo> = (props: PostInfo) => {
    return(<div className="post">
        <PublisherName name={props.publisherName} />
        <Content text={props.content}/>
        <PublishDate dateTime={props.publishDate}/>
        <Likes amount={props.likes}/>
        <Comments comments={props.comments}/>
    </div>);
};

export default Post;