import {useForm} from 'react-hook-form'
import { Navigate } from 'react-router-dom';
const apiURL = 'https://assignment6-mul.herokuapp.com'
const apiKey = '1eLhEr5t/0uCkqaxIDWvgw=='

var username = '';

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

    const onSubmit = (data) => {
        username = data.username;
        console.log(username)

        fetch(`${apiURL}/translations?username=${username}`)
        .then(response => response.json())
        .then(results => {
            if (results.length >0){
                alert("logged in")
                Navigate("/translations")
            } else {
                alert("No user with that username, creating new user")
                postNewUser();
                Navigate("/translations")
            }
        })
        .catch(error => {
        })

        

    }

    const postNewUser = () => {
        fetch(`${apiURL}/translations`, {
            method: 'POST',
            headers: {
              'X-API-Key': apiKey,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                username: username, 
                translations: [] 
            })
            })
            .then(response => {
             if (!response.ok) {
                throw new Error('Could not create new user')
            }
            return response.json()
            })
            .then(newUser => {
            console.log(newUser)
            })
            .catch(error => {
        })
    }

    return (
        <>
            <form onSubmit={ handleSubmit(onSubmit) }>
                <input type="text" className="username" name="username" placeholder="Username" {...register("username", usernameConfig )}/>
                <button type='submit'>Log in</button>
            </form>
        </>
    )
}

export default LoginForm



