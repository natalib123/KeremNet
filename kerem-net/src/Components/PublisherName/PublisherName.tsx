import React from "react";

interface Publisher{
    name: string;
}

const PublisherName: React.FC<Publisher> = (props: Publisher) => {
    return (<h2>
        {props.name}
    </h2>);
}

export default PublisherName;
