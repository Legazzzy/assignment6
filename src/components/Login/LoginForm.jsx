import { useForm } from "react-hook-form";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { storageRead, storageSave } from '../../utils/storage';
import { useUser } from '../../context/UserContext';
import { loginUser } from '../../api/user';
import '../../css/login.css';

const usernameConfig = {
    required: true,
    minLength: 2
}


const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const { user, setUser} = useUser()

    
    const [loading, setLoading] = useState(false)
    const [apiError, setApiError] = useState(null)
    const nav = useNavigate();


    useEffect(() => {
        console.log('user has changed!' + user)
        if (user !== null){
            nav('/translations')
        }
    }, [ user, nav ])

    const onSubmit = async ({ username }) => {
        setLoading(true)
        const [error, responseUser] = await loginUser(username)
        console.log("response: "+responseUser)
        if (error !== null) {
            setApiError(error)
        }
        if (responseUser !== null){
            storageSave('logged in user', responseUser.username)
            setUser(responseUser)
        }
        setLoading(false)
    };

    const errorMessage = (() => {
    }) ()

    return (
        <>
            <form onSubmit={ handleSubmit(onSubmit)} className="formDiv">
                <div className="content">
                <input type="text" className="username" name="username" placeholder="Username" {...register("username", usernameConfig )}/>
                <button className="loginButton" type='submit' disabled = {loading} >Log in</button>
                </div>

                {apiError && <p>{apiError}</p>}
            </form>
        </>
    )
}

export default LoginForm; 