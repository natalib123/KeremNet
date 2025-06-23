import React from "react";

interface NumberLikes{
    amount: number;
}

const Likes: React.FC<NumberLikes> = (props: NumberLikes) => {
    return (<div>
        <p>{props.amount} Likes</p>
        <img src="https://iconduck.com/emojis/42507/white-heart"/>
    </div>);
}

export default Likes;