import React from 'react';
import '../css/login.css';
import LoginComp from '../components/Login/LoginComponent'
import LoginForm from '../components/Login/LoginForm'
import Profile from '../views/Profile'

import { Link } from "react-router-dom";


const Login = () => {
    return (
        <React.Fragment>
        <Link to="/profile">profile</Link>  
        <LoginComp />
        <LoginForm />
        </React.Fragment>
    )
}

export default Login