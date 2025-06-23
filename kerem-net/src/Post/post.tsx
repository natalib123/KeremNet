import React from "react";
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
    </div>);
};

export default Post;