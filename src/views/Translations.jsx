import React, {useState} from "react";
import Header from "../components/HeaderComponent";
import Translate from '../components/Translations/TranslateComponent';
import HelloLogo from "../components/Translations/HelloLogoComponent";
import TranslateInput from "../components/Translations/TranslationInput";
import NavBar from '../components/NavBar/Navbar';
import withAuth from "../hoc/withAuth";


const Translations = () => {
    const [wordToTranslate, setWordToTranslate] = useState("");

    return (
        <div>
            <NavBar/>
            <HelloLogo/>
            <TranslateInput setWordToTranslate={setWordToTranslate}/>
            <Translate wordToTranslate = {wordToTranslate}/>
        </div>

    )
}

export default Translations;
//export default withAuth(Translations);