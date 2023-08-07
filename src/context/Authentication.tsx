import React, { useState } from 'react'


const initialState = {
    isLoggedIn: !!localStorage.getItem("user"),
    login: (status: boolean) => { }
};
export const AuthenticationContext = React.createContext(initialState);

export const Authentication = ({ children }: any) => {
    const [isLoggedIn, setLoggedIn] = useState(!!localStorage.getItem("user"))

    const login = (status: boolean) => {
        setLoggedIn(status)
    }

    return (
        <AuthenticationContext.Provider value={{ isLoggedIn, login }}>
            {children}
        </AuthenticationContext.Provider>
    )
}
