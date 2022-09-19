import React from "react";
import logoImg from "../assets/Logo.png"

function Header(){
    return(
        <React.Fragment>
        <img src={logoImg} alt="Logo" className="headerLogo"></img>
        <div>Lost in translation</div>  
        </React.Fragment>
    )  
}

export default Header;