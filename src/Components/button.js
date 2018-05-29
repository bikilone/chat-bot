import React from "react";

import menu from "../img/menu.svg";
import "./css/button.css";

const Button = (props) => {

    return (
        <div className="button">
            <img src={menu} alt="menu"/>
            <input onChange={props.handleChange} type="text" value={props.input} onKeyUp={props.handleSubmit}/>
            <button onClick={props.handleClick}>Send |></button>
        </div>
    )
}

export default Button;