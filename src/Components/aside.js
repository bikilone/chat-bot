import React from "react";

import profile from "../img/profile.svg";
import edit from "../img/edit.svg";
import "./css/asside.css"

const Asside = () => {

    return (
        <div className="asside">
         <img src={edit} alt="edit"/>
         <img src={profile} alt="profile" />
        </div>
    )
}

export default Asside;