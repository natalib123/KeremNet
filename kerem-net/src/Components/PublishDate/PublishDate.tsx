import React from "react";

interface PublishDateProps{
    dateTime: string;
}

const PublishDate: React.FC<PublishDateProps> = (props: PublishDateProps) => {
    let date = new Date(props.dateTime);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    return(
        <div>
            <p>{day} - {month} - {year}</p>
            <p>{hours} : {minutes} : {seconds}</p>
        </div>
    );
}

export default PublishDate;