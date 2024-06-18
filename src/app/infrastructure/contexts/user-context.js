"use client"; // Indicates that this code runs on the client side

import {createContext, useState} from "react"; // Importing createContext and useState hooks from React

// Creating UserContext
export const UserContext = createContext({});

// UserContextProvider component to provide user-related context to its children
export const UserContextProvider = ({children}) => {
    const [isPremium, setIsPremium] = useState(false); // State to track if the user has purchased the pro plan
    // TODO: Store whether the user purchased the pro plan in Cloud Firestore

    const [profileViewUsed, setProfileViewUsed] = useState(false); // State to track if a profile view has been used
    // TODO: Count if a profile view has been used and record which profile the user viewed in Cloud Firestore

    const [favoriteProfiles, setFavoriteProfiles] = useState([]); // State to store favorite profiles
    // TODO: Utilize hearts on applicant profiles to store favorite profiles in Cloud Firestore

    // Providing user-related context values to children components
    return (
        <UserContext.Provider value={{
            isPremium,
            setIsPremium,
            profileViewUsed,
            setProfileViewUsed,
            favoriteProfiles,
            setFavoriteProfiles
        }}>
            {children}
        </UserContext.Provider>
    );
}
