"use client"
import {createContext, useState, useEffect} from "react";
import {GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged} from "firebase/auth";
import {auth} from "../firebase/firebase";
import {LoadingSpinner} from '../../components/loading-spinner';

export const AuthContext = createContext({});
export const AuthContextProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false);
    const [username, setUsername] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [profilePicture, setProfilePicture] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsAuth(true);
                setUsername(user.displayName);
                setUserEmail(user.email);
                setProfilePicture(user.photoURL);
            } else {
                setIsAuth(false);
                setUsername("");
                setUserEmail("");
                setProfilePicture("");
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const userInfo = result.user;
                setIsAuth(true);
                setUsername(userInfo.displayName);
                setUserEmail(userInfo.email);
                setProfilePicture(userInfo.photoURL);
            })
            .catch((error) => {
                console.log(`${error.code}: ${error.message}`);
            });
    }

    const logout = async () => {
        await signOut(auth);
        setIsAuth(false);
    }

    if (loading) {
        return <LoadingSpinner/>;
    }

    return (
        <AuthContext.Provider value={{isAuth, signInWithGoogle, logout, username, userEmail, profilePicture}}>
            {children}
        </AuthContext.Provider>
    )
}
