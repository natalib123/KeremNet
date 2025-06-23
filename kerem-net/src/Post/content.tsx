import React from "react";

interface Data{
    text: string;
}

const Content: React.FC<Data> = (props: Data) =>{
    return(
        <div className="container">
            {props.text}
        </div>
    );
}

export default Content;