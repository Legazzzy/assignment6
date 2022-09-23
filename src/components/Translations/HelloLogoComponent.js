import logoHallo from '../../assets/Logo-Hello.png';
import '../../css/TranslateComponent.css';


import React from "react";

//Simple html to display the Hello logo.
function HelloLogo(){
    return(
        <div>
            <img src={logoHallo} className="App-logo" alt="logo" />
            <p className="underline"></p>
        </div>
    )
}

export default HelloLogo;