import React from "react";

import "./css/main.css";
import Message from "./message";

const Main = (props) => {

    return (
        <div className="main" >
            {props.message.map((element, i) => <Message text={element} key={i} id={i}/>)}
        </div>
    )
}

export default Main;