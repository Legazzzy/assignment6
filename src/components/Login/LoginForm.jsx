import { useForm } from "react-hook-form";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { storageSave } from '../../utils/storage';
import { useUser } from '../../context/UserContext';
import { loginUser } from '../../api/user';
import '../../css/login.css';


//requirements for username
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

    //state for loading boolean
    const [loading, setLoading] = useState(false)

    //state for apiError
    const [apiError, setApiError] = useState(null)

    //redirect/navigation
    const nav = useNavigate();


    //when user has been checked
    useEffect(() => {
        console.log('user has changed!' + user)

        //if user is something else than null, it means it has been changed
        if (user !== null){
            //redirect to /translations
            nav('/translations')
        }
    }, [ user, nav ])


    //takes in async username
    const onSubmit = async ({ username }) => {
        //button has been pressed, set loading to true
        setLoading(true)

        //login user, wait for response, rsponse will be an object
        const [error, responseUser] = await loginUser(username)
        console.log("response: "+responseUser)

        //if there is an error, set the api error
        if (error !== null) {
            setApiError(error)
        }
        // if there is no error
        if (responseUser !== null){
            //save username from response object
            storageSave('logged in user', responseUser.username)
            //set user to response object
            setUser(responseUser)
        }

        //set loading to false when user has been logged in.
        setLoading(false)
    };

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