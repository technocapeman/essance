"use client"
import {createContext, useState} from "react";

export const UserContext = createContext({});

export const UserContextProvider = ({children}) => {
    const [isPremium, setIsPremium] = useState(false);
    const [profileViewUsed, setProfileViewUsed] = useState(false);

    return (
        <UserContext.Provider value={{isPremium, profileViewUsed, setProfileViewUsed}}>
            {children}
        </UserContext.Provider>
    )
}
