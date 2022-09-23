import React from "react";
import logoImg from "../../assets/Logo.png"
import '../../css/login.css';
import 'animate.css';

function LoginComp(){
    return(
        <React.Fragment>
        <div className="loginDiv">
            <img src={logoImg} alt="Logo" className="headerLogo animate_animated animate__bounce animate__delay-2s"></img>
        </div>
        
        </React.Fragment>
    )
}

export default LoginComp;

