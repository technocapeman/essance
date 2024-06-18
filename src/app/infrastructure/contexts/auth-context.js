"use client"; // Indicates that this code runs on the client side

import {createContext, useState, useEffect} from "react"; // Importing createContext, useState, and useEffect hooks from React
import {GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged} from "firebase/auth"; // Importing Firebase authentication functions
import {auth} from "../firebase/firebase"; // Importing Firebase auth instance
import {LoadingSpinner} from '../../components/loading-spinner'; // Importing LoadingSpinner component

// Creating AuthContext
export const AuthContext = createContext({});

// AuthContextProvider component to provide authentication context to its children
export const AuthContextProvider = ({children}) => {
    // TODO: Store user information in Cloud Firestore
    const [isAuth, setIsAuth] = useState(false); // State for authentication status
    const [username, setUsername] = useState(""); // State for username
    const [userEmail, setUserEmail] = useState(""); // State for user email
    const [profilePicture, setProfilePicture] = useState(""); // State for profile picture
    const [loading, setLoading] = useState(true); // State for loading status

    // Effect to handle authentication state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsAuth(true); // Set authentication status to true if user is authenticated
                setUsername(user.displayName); // Set username
                setUserEmail(user.email); // Set user email
                setProfilePicture(user.photoURL); // Set profile picture
            } else {
                setIsAuth(false); // Set authentication status to false if no user is authenticated
                setUsername(""); // Clear username
                setUserEmail(""); // Clear user email
                setProfilePicture(""); // Clear profile picture
            }
            setLoading(false); // Set loading status to false
        });

        return () => unsubscribe(); // Cleanup subscription on unmount
    }, []);

    // Function to sign in with Google
    const signInWithGoogle = () => {
        return new Promise((resolve, reject) => {
            const provider = new GoogleAuthProvider();
            signInWithPopup(auth, provider)
                .then((result) => {
                    const userInfo = result.user;
                    setIsAuth(true); // Set authentication status to true
                    setUsername(userInfo.displayName); // Set username
                    setUserEmail(userInfo.email); // Set user email
                    setProfilePicture(userInfo.photoURL); // Set profile picture
                    resolve(userInfo); // Resolve promise with user info
                })
                .catch((error) => {
                    console.log(`${error.code}: ${error.message}`); // Log error message
                    reject(error); // Reject promise with error
                });
        });
    }

    // Function to log out the user
    const logout = async () => {
        await signOut(auth); // Sign out the user
        setIsAuth(false); // Set authentication status to false
    }

    // Function to delete the current user
    const deleteUser = async () => {
        const user = auth.currentUser;
        await user.delete(); // Delete the current user
    }

    // Show loading spinner while loading
    if (loading) {
        return <LoadingSpinner/>;
    }

    // Provide authentication context to children components
    return (
        <AuthContext.Provider value={{isAuth, signInWithGoogle, logout, username, userEmail, profilePicture, deleteUser}}>
            {children}
        </AuthContext.Provider>
    )
}
