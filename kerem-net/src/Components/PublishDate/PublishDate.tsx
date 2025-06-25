import React from "react";

interface PublishDateProps{
    dateTime: Date;
}

const PublishDate: React.FC<PublishDateProps> = (props: PublishDateProps) => {
    let year = props.dateTime.getFullYear();
    let month = props.dateTime.getMonth() + 1;
    let day = props.dateTime.getDate();
    let hours = props.dateTime.getHours();
    let minutes = props.dateTime.getMinutes();
    let seconds = props.dateTime.getSeconds();
    return(
        <div>
            <p>{day} - {month} - {year}</p>
            <p>{hours} : {minutes} : {seconds}</p>
        </div>
    );
}

export default PublishDate;