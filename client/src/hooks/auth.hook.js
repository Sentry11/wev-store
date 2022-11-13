// A hook that is responsible for registering, authorizing and logging out of a user account, 
// or rather, it will receive a token that will be stored in local storage for automatic login to the account 
// if the token already exists and delete the token if the user has logged out

import { useState, useCallback, useEffect } from "react"

const storageName = 'userData'


export const useAuth = () => {

    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)

    const login = useCallback((jwtTocken, id) => {

        setToken(jwtTocken)
        setUserId(id)
        localStorage.setItem(storageName ,JSON.stringify({
            userId: id, token:jwtTocken
        }))

    }, [])


    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)
        localStorage.removeItem(storageName)
    }, [])

    // checking if page was reloading but user autorized
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))
        
        if (data && data.token) {
            login(data.token, data.userId)
        }
    }, [login])


    return {login, logout, token, userId}
}