import React from "react";
import { useState } from "react";
import '../../css/NavBar.css';
import { useNavigate } from 'react-router-dom';


function NavBar() {
    const nav = useNavigate();

    const NavigateProfile = () =>{
        nav('/profile')
    }

    const NavigateTranslation = () =>{
        nav('/translations')
    }

        return(
            <div className="navBar">
                <div className="info">
                    <p className="text" onClick={NavigateTranslation}>Translation</p>
                </div>
                <div className="info">
                    <p className="text" onClick={NavigateProfile}>Profile</p>
                </div>
        </div>
    )
}
export default NavBar;