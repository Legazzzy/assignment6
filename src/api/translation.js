import { createHeaders } from "."

const apiUrl = process.env.REACT_APP_API_URL

//Adding a translation-input to the api on the logged in user, to store it for other uses.
export const translationAdd = async (user, translation) => {
    try{
        const response = await fetch(`${apiUrl}/${user.id}`, {
            method: 'PATCH',
            headers: createHeaders(),
            body: JSON.stringify({
                translations: [...user.translations, translation]
            })
        })

        if(!response.ok){
            throw new Error('Could not update translations')
        }
        const result = await response.json()
        return[null, result]
    }
    catch(error){
        return [error.message, null]
    }
}

//Clearing a users translation history by setting it to empty.
export const translationClearHistory = async (userId) => {
    try{
        const response = await fetch(`${apiUrl}/${userId}`, {
            method: 'PATCH',
            headers: createHeaders(),
            body: JSON.stringify({
                translations: []
            })
        })

        if(!response.ok){
            throw new Error('Could not delete translations')
        }
        const result = await response.json()
        return[null, result]
    }
    catch(error){
        return [error.message, null]
    }
}