"use client"
import {createContext, useState} from "react";

export const UserContext = createContext({});

export const UserContextProvider = ({children}) => {
    const [isPremium, setIsPremium] = useState(false); // TODO: Store whether the user purchased the pro plan in Cloud Firestore
    const [profileViewUsed, setProfileViewUsed] = useState(false);  // TODO: Count if a profile view has been used and record which profile the user viewed in Cloud Firestore
    const [favoriteProfiles, setFavoriteProfiles] = useState([]);  // TODO: Utilize hearts on applicant profiles to store favorite profiles in Cloud Firestore

    return (
        <UserContext.Provider value={{isPremium, setIsPremium, profileViewUsed, setProfileViewUsed, favoriteProfiles, setFavoriteProfiles}}>
            {children}
        </UserContext.Provider>
    )
}
