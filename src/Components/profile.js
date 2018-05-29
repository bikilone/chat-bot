import React from "react";
import jenna from "../img/jenna_logo_small.svg";

import "./css/profile.css";

const Profile = (props) => {
    let src = "";
    if (props.id % 2 !== 0) {
        src = "https://i.pinimg.com/originals/eb/01/7d/eb017dc0def701029b0efff741b01776.jpg"
    } else { 
        src = jenna;
    }

  
    return (
        <img className="profile" src={src} alt="" />
    )
}

export default Profile;