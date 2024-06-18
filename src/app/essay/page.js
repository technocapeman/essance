"use client"; // Indicates that this code runs on the client side

import React, {useContext, useEffect, useState} from 'react'; // Importing React, useContext, useEffect, and useState hooks
import {TopBar} from '../components/top-bar'; // Importing TopBar component
import {useSearchParams} from 'next/navigation'; // Importing useSearchParams hook from Next.js for URL query parameters
import {AuthContext} from "@/app/infrastructure/contexts/auth-context"; // Importing AuthContext for authentication-related data
import {PaywallPopup} from '@/app/essay/components/paywall-popup'; // Importing PaywallPopup component
import {UserContext} from "@/app/infrastructure/contexts/user-context"; // Importing UserContext for user-related data
import {LoginPopup} from "@/app/essay/components/login-popup"; // Importing LoginPopup component

// Functional component Essay
function Essay() {
    const searchParams = useSearchParams(); // Hook to get URL query parameters
    const {isAuth} = useContext(AuthContext); // Extracting isAuth from AuthContext
    const {isPremium, profileViewUsed} = useContext(UserContext); // Extracting isPremium and profileViewUsed from UserContext
    const [showAuthPopup, setShowAuthPopup] = useState(false); // State for managing the visibility of the authentication popup
    const [showPaywall, setShowPaywall] = useState(false); // State for managing the visibility of the paywall popup

    // Effect hook to handle popup visibility based on authentication and user status
    useEffect(() => {
        if (!isAuth) {
            setShowAuthPopup(true); // Show authentication popup if not authenticated
        } else {
            setShowAuthPopup(false); // Hide authentication popup if authenticated
            if (!isPremium && profileViewUsed) {
                setShowPaywall(true); // Show paywall popup if user is not premium and profile view has been used
            } else {
                setShowPaywall(false); // Hide paywall popup otherwise
            }
        }
    }, [isAuth, isPremium, profileViewUsed]); // Dependency array to trigger the effect when any of these values change

    return (
        <div className="relative">
            {/* Main content container with conditional blur effect if popups are shown */}
            <div className={`bg-white min-h-screen relative ${showAuthPopup || showPaywall ? 'filter blur-sm' : ''}`}>
                <TopBar/> {/* Rendering TopBar component */}
                <div className="relative w-full p-20"> {/* Container for the essay content */}
                    <h1 className="text-2xl text-black font-bold mb-4">
                        {searchParams.get("prompt")} {/* Displaying the essay prompt */}
                    </h1>
                    <p className="text-gray-700 mb-2">
                        {searchParams.get("content")} {/* Displaying the essay content */}
                    </p>
                </div>
            </div>
            {showAuthPopup && <LoginPopup/>} {/* Conditionally rendering LoginPopup component */}
            {showPaywall && <PaywallPopup/>} {/* Conditionally rendering PaywallPopup component */}
        </div>
    );
}

export default Essay; // Exporting Essay component as default export
