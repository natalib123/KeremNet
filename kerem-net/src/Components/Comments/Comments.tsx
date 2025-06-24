import React from "react";

interface CommentsProps{
    comments: string[];
}

const Comments: React.FC<CommentsProps> = (props: CommentsProps) => {
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