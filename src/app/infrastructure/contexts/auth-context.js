"use client"
import {createContext, useState} from "react";

export const AuthContext = createContext({});

export const AuthContextProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(true);

    return (
        <AuthContext.Provider value={{isAuth}}>
            {children}
        </AuthContext.Provider>
    )
}
