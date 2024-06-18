import React, {useContext} from 'react'; // Importing React and useContext hook from React
import {AuthContext} from "@/app/infrastructure/contexts/auth-context"; // Importing AuthContext for authentication-related data

// Functional component LoginPopup
export const LoginPopup = () => {
    // Extracting signInWithGoogle function from AuthContext
    const {signInWithGoogle} = useContext(AuthContext);

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50"> {/* Container for the popup, fixed position covering the entire viewport */}
            <div className="bg-black bg-opacity-50 absolute inset-0"></div> {/* Semi-transparent black background */}
            <div className="relative bg-white rounded-lg overflow-hidden z-10 shadow-lg w-96"> {/* Popup container with white background and rounded corners */}
                <img src="/images/MITHomePage.jpg" alt="Popup Background" className="w-full h-48 object-cover"/> {/* Background image */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4"> {/* Container for the popup content */}
                    <h2 className="text-2xl font-bold mb-2">Create an Account</h2> {/* Title */}
                    <p className="text-center mb-4">Sign up now to view one free profile!</p> {/* Description */}
                    <button
                        className="flex items-center gap-2 bg-white border border-gray-400 text-gray-800 py-2 px-4 rounded-lg shadow transition duration-200 hover:shadow-md hover:bg-gray-50" {/* Sign-in button */}
                        onClick={signInWithGoogle} // Function to sign in with Google
                    >
                        <div className="h-5 w-5 mr-2"> {/* Container for the Google icon */}
                            <svg className="w-full h-full" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 48 48" style={{display: 'block'}}> {/* Google icon */}
                                <path fill="#EA4335"
                                      d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                                <path fill="#4285F4"
                                      d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                                <path fill="#FBBC05"
                                      d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                                <path fill="#34A853"
                                      d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                                <path fill="none" d="M0 0h48v48H0z"></path>
                            </svg>
                        </div>
                        <span>Sign up with Google</span> {/* Button text */}
                    </button>
                </div>
            </div>
        </div>
    );
};
