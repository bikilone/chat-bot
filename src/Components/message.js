import React from "react";

import "./css/message.css";
import Profile from "./profile";

const Message = (props) => {

    return (
        <div className="message">
            <p>{props.text}</p>
            <Profile id={props.id}/>
        </div>
    )
}

export default Message