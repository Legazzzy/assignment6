import logoHallo from '../../assets/Logo-Hello.png';
import '../../css/TranslateComponent.css';


import React from "react";

function HelloLogo(){
    return(
        <div>
            <img src={logoHallo} className="App-logo" alt="logo" />
            <p class="underline"></p>
        </div>
    )
}

export default HelloLogo;