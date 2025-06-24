import React from "react";

interface LikesProps{
    amount: number;
}

const Likes: React.FC<LikesProps> = (props: LikesProps) => {
    return (<div>
        <p>{props.amount} Likes</p>
        <img src="https://static-00.iconduck.com/assets.00/white-heart-emoji-512x502-ezd6qau7.png"/>
    </div>);
}

export default Likes;