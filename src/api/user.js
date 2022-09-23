import { createHeaders } from './index'

const apiUrl = process.env.REACT_APP_API_URL

//check if user exists
export const checkForUser = async (username) => {
    try {
        //wait for response from API with the username
        const response = await fetch(`${apiUrl}?username=${username}`);
        console.log(response)
        //if response isn't ok, error
        if(!response.ok) {
            throw new Error('Could not complete request');
        }
        //transforms data to JSON
        const data = await response.json();
        //return user object
        return [null, data];
    }
    catch (error) {
        return [error.message, []]
    }
}

//if no user with username, creat new
export const createUser = async (username) => {
    alert("no user with this name, creating user")
    //post new user with username
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: createHeaders(),
            body: JSON.stringify({
                username,
                translations: []
            })
        });
        if(!response.ok) {
            throw new Error('Could not create new user with username '+username);
        }
        const data = await response.json();
        //return user object
        return [null, data];
    } catch (error) {
        return [error.message, []];
    }
}

//log in user
export const loginUser = async (username) => {
    alert("logging in")

    //check if user exists
    const [checkError, user] = await checkForUser(username)

    //error handling
    if (checkError !== null) {
        return [ checkError, null ]
    }

    //if if there is a user with the username, return user
    if (user.length > 0){
        return [ null, user.pop() ];
    }
    // if no user with username, return createUser with the given username
    return await createUser(username);

}