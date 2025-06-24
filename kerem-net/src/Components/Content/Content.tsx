import React from "react";

interface ContentProps{
    text: string;
}

const Content: React.FC<ContentProps> = (props: ContentProps) =>{
    return(
        <div className="container">
            {props.text}
        </div>
    );
}

export default Content;