import React from "react";
import Header from './HeaderComponent'
import Footer from './FooterComponent';
import Login from './Login/LoginComponent'
import Translate from './TranslateComponent'


function Main (){
    return(
        <React.Fragment>
            <Header/>
            <Login/>
            <Translate/>
            <Footer/>
        </React.Fragment>
    );
}

export default Main;