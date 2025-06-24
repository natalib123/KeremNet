import React from "react";
import Like from '../../Assets/like.png';

interface LikesProps{
    amount: number;
}

const Likes: React.FC<LikesProps> = (props: LikesProps) => {
    return (<div>
        <p>{props.amount} Likes</p>
        <img src={Like}/>
    </div>);
}

export default Likes;