import React from "react";

interface CommentsContents{
    comments: string[];
}

const Comments: React.FC<CommentsContents> = (props: CommentsContents) => {
    return (<div>
        <p>Comments</p>
        <ul>
            {props.comments.map((comment, index) => (
                <li key={index}>{comment}</li>
            ))}
        </ul>
        </div>);
}

export default Comments;