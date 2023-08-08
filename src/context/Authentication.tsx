import React, { useState } from 'react'


const initState =  {
    isLoggedIn: !!localStorage.getItem("user"),
    login: (status: boolean) => {}
}
export const AuthenticationContext = React.createContext(initState);

export const Authentication = ({ children }: any) => {
    const [isLoggedIn, setLoggedIn] = useState(!!localStorage.getItem("user"))

    const login = (status: boolean)=> {
        return setLoggedIn(status)
    }

    return (
        <AuthenticationContext.Provider value={{ isLoggedIn, login}}>
            {children}
        </AuthenticationContext.Provider>
    )
}
