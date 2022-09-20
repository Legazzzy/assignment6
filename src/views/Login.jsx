import React from 'react';
import '../css/login.css';
import LoginComp from '../components/Login/LoginComponent'
import LoginForm from '../components/Login/LoginForm'

const Login = () => {
    return (
        <React.Fragment>
        <LoginComp />
        <LoginForm />
        </React.Fragment>
    )
}

export default Login