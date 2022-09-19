import React from "react";
import logoImg from "../../assets/Logo.png"


function Login(){
    return(
        <React.Fragment>
        <div>Login</div>
        <img src={logoImg} alt="Logo" className="headerLogo"></img>
        </React.Fragment>
    )
}

export default Login;