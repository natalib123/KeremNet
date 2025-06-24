import React from "react";

interface PublisherNameProps{
    name: string;
}

const PublisherName: React.FC<PublisherNameProps> = (props: PublisherNameProps) => {
    return (<h4>
        {props.name}
    </h4>);
}

export default PublisherName;
