'use client' // Indicates that this code runs on the client side

import {useContext, useState} from 'react'; // Importing useContext and useState hooks from React
import {UserContext} from "@/app/infrastructure/contexts/user-context"; // Importing UserContext for user-related data
import {AuthContext} from "@/app/infrastructure/contexts/auth-context"; // Importing AuthContext for authentication-related data
import {TopBar} from "@/app/components/top-bar"; // Importing TopBar component

const ProfilePage = () => {
    // Extracting isPremium from UserContext
    const {isPremium} = useContext(UserContext);
    // Extracting logout, username, userEmail, and profilePicture from AuthContext
    const {logout, username, userEmail, profilePicture, deleteUser} = useContext(AuthContext);

    // State to manage the visibility of the delete confirmation popup
    const [showDeleteBanner, setShowDeleteBanner] = useState(false);

    // Function to handle logout action
    const handleLogout = async () => {
        await logout(); // Awaiting the logout function
        window.location.assign('/'); // Redirect to home page after logout
    };

    const handleUserDelete = async () => {
        await deleteUser();
        window.location.assign('/');
    }

    // Function to show delete confirmation popup
    const confirmDeleteBanner = () => {
        setShowDeleteBanner(true);
    }

    // Function to close delete confirmation popup
    const closeDeleteBanner = () => {
        setShowDeleteBanner(false);
    }

    return (
        <div className="bg-white min-h-screen relative"> {/* Main container with background color and min-height */}
            <TopBar/> {/* Rendering TopBar component */}
            <div className="min-h-screen flex flex-col items-center"> {/* Flex container for centering content */}
                <div className="w-full max-w-6xl px-8 py-16"> {/* Container with max width and padding */}
                    <div className="flex flex-col items-center mb-8"> {/* Flex container for profile section */}
                        {/* Displaying profile picture if available, otherwise a placeholder */}
                        {profilePicture ? (
                            <img src={profilePicture} alt="Profile" className="w-24 h-24 rounded-full mb-4"/>
                        ) : (
                            <div className="w-24 h-24 bg-gray-300 rounded-full mb-4"></div>
                        )}
                        <h1 className="text-2xl text-black font-bold">Hey {username || 'User'}.</h1> {/* Greeting with username */}
                    </div>
                    <div className="w-full"> {/* Container for profile details */}
                        {/* Displaying user details */}
                        <div className="flex items-center mb-4">
                            <label className="w-1/4 text-gray-700 font-medium">Full Name:</label>
                            <div className="w-3/4 px-4 py-2 border rounded-lg bg-gray-100 text-black">{username}</div>
                        </div>
                        <div className="flex items-center mb-4">
                            <label className="w-1/4 text-gray-700 font-medium">Email:</label>
                            <div className="w-3/4 px-4 py-2 border rounded-lg bg-gray-100 text-black">{userEmail}</div>
                        </div>
                        <div className="flex items-center mb-4">
                            <label className="w-1/4 text-gray-700 font-medium">Plan:</label>
                            <div className="w-3/4 px-4 py-2 border rounded-lg bg-gray-100 text-black">{isPremium ? "Pro" : "Free"}</div>
                        </div>
                        <div className="flex items-center mb-4">
                            <label className="w-1/4 text-gray-700 font-medium">Manage Account:</label>
                            {/* Button to trigger logout */}
                            <button
                                onClick={handleLogout}
                                className="w-3/4 px-4 py-2 text-blue-600 border rounded-lg bg-white hover:bg-gray-50 mb-2">
                                Sign Out
                            </button>
                        </div>
                        <div className="flex items-center mb-4">
                            <label className="w-1/4 text-gray-700 font-medium">Manage Account:</label>
                            {/* Button to trigger account deletion confirmation */}
                            <button
                                onClick={confirmDeleteBanner}
                                className="w-3/4 px-4 py-2 text-red-600 border rounded-lg bg-white hover:bg-gray-50">
                                Delete Account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {showDeleteBanner && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"> {/* Overlay for popup */}
                    <div className="bg-black text-white rounded-lg p-6 max-w-xs mx-auto"> {/* Popup container */}
                        <h2 className="text-xl font-bold mb-4">Are you sure you want to delete your account?</h2>
                        {isPremium && (
                            <p className="text-gray-400 mb-4">You will lose access to your non-refundable Pro subscription.</p>
                        )}
                        <button
                            onClick={handleUserDelete}
                            className="w-full bg-red-600 text-white py-2 rounded-md mb-2">
                            Delete Account
                        </button>
                        <button
                            onClick={closeDeleteBanner}
                            className="w-full bg-white text-black py-2 rounded-md">
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfilePage; // Exporting ProfilePage component as default export
