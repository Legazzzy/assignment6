import React from "react";
import { Component } from "react";
import '../../css/TranslateInputComponent.css';

class TranslateInput extends Component{
    
    state = {
        wordToTranslate: ""
    };
    
    
    handleInput = event => {
        this.setState({wordToTranslate: event.target.value});
    };
    
    logValue = () => {
        console.log(this.state.wordToTranslate);
    }
    
    render(){

        return(
            <div class="inputCard">
            <div className="content">
                <input type="text" placeholder="Enter word or sentence here" className="inputField" onChange={this.handleInput}></input> 
                <button onClick={this.logValue} >Translate</button>
                <p className="underline"></p>
            </div>

        </div>
    )
}
}
export default TranslateInput;