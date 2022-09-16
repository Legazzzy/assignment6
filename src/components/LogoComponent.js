import React from "react";
import logo from '../assets/Logo.png';

function logoImg (){
    return(
        <React.Fragment>
            <div><img src={logo} className="App-logo" alt="logo" /></div>

        </React.Fragment>
        
    );
}

export default logoImg;