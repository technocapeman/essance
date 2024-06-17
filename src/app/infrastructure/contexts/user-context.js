"use client"
import {createContext, useState} from "react";

export const UserContext = createContext({});

export const UserContextProvider = ({children}) => {
    const [isPremium, setIsPremium] = useState(false);
    const [profileViewUsed, setProfileViewUsed] = useState(false);
    const [favoriteProfiles, setFavoriteProfiles] = useState([]);

    return (
        <UserContext.Provider value={{isPremium, setIsPremium, profileViewUsed, setProfileViewUsed, favoriteProfiles, setFavoriteProfiles}}>
            {children}
        </UserContext.Provider>
    )
}
