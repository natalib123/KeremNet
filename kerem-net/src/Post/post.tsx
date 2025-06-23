import React from "react";

interface PostInfo{
    publisherName: string;
    content: string;
    comments: string[];
    likes: number;
    publishDate: Date;
};

const Post: React.FC = (props: PostInfo) => {
    return(<div></div>);
};

export default Post;