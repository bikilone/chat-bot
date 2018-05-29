import React from "react";

import logo from "../img/jenna_logo_small.svg";
import "./css/footer.css";

const Footer = () => {

    return (
        <div className="footer">
          <p>Terms/Conditions | Privacy Policy | <span>Powered by </span><img src={logo} alt="Jenna"/></p>
        </div>
    )
}

export default Footer;