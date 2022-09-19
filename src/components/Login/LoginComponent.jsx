import React from "react";
import logoImg from "../../assets/Logo.png"
import '../../css/login.css';
import 'animate.css';
var usernames = [];


function Login(){
    return(
        <React.Fragment>
        <div className="loginDiv">
        <img src={logoImg} alt="Logo" className="headerLogo animate__animated animate__bounceInLeft"></img>
        <div className="inputDiv">
            <form onSubmit="checkForUsername()">
                let username = <input type="text" className="username" name="username" placeholder="Username"/>
                <button type="Submit"> Submit</button>
            </form>
        </div>
        </div>
        
        </React.Fragment>
    )
}

function checkForUsername() {
    prompt("hello")
    let username = document.getElementsByClassName("username").value;
    prompt("username")
    if (usernames.has(username)){

    }
}

export default Login;