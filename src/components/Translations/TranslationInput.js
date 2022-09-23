import React from "react";
import { useState } from "react";
import { Component } from "react";
import '../../css/TranslateInputComponent.css';

const TranslateInput = ({setWordToTranslate}) => {
    
    //State for the user-given word/sentence to be translated
    const [inputWord, setInputWord] = useState("");
    
    //When the input is changed, the inputWord is changed along with it
    const handleInput = (event) => {
        setInputWord(event.target.value)
    };

        return(
            <div className="inputCard">
            <div className="content">
                <div className="inputline">
                <input type="text" placeholder="Enter word or sentence here" className="inputField" onChange={handleInput}></input> 
                <button className="translateButton" onClick={() => setWordToTranslate(inputWord)}>Translate</button>
                </div>
                <p className="underline"></p>
            </div>


        </div>
    )
}
export default TranslateInput;