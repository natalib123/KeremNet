import React from "react";
import Content from "./content";
import PublisherName from "./publisher-name";

interface PostInfo{
    publisherName: string;
    content: string;
    comments: string[];
    likes: number;
    publishDate: Date;
};

const Post: React.FC<PostInfo> = (props: PostInfo) => {
    return(<div>
        <PublisherName name={props.publisherName} />
        <Content text={props.content}/>
        
    </div>);
};

export default Post;