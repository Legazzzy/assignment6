import React from "react";
import Header from "../components/HeaderComponent";
import Translate from '../components/Translations/TranslateComponent';
import HelloLogo from "../components/Translations/HelloLogoComponent";
import TranslateInput from "../components/Translations/TranslationInput";


const Orders = () => {
    return (
        <div>
            <HelloLogo/>
            <TranslateInput/>
           <Translate/>
        </div>

    )
}

export default Orders