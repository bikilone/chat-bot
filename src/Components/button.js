import React from "react";

import menu from "../img/menu.svg";
import "./css/button.css";

const Button = () => {

    return (
        <div className="button">
            <img src={menu} alt="menu"/>
            <input type="text"/>
            <button>Send |></button>
        </div>
    )
}

export default Button;