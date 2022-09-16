import React from "react";
import logoImg from "../assets/Logo.png"

function Header(){
    return(
        <React.Fragment>
        <img src={logoImg} alt="Logo" className="headerLogo"></img>
        <div>Header component</div>  
        </React.Fragment>
    )  
}

export default Header;