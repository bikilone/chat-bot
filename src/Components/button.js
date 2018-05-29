import React from "react";

import menu from "../img/menu.svg";
import "./css/button.css";

const Button = (props) => {

    return (
        <div className="button">
            <img src={menu} alt="menu"/>
            <input type="text"/>
            <button onClick={props.bla}>Send |></button>
        </div>
    )
}

export default Button;