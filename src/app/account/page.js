'use client'
import {useContext} from 'react';
import {UserContext} from "@/app/infrastructure/contexts/user-context";
import {AuthContext} from "@/app/infrastructure/contexts/auth-context";
import {HOC} from "@/app/infrastructure/hoc/hoc";
import {TopBar} from "@/app/components/top-bar";

const ProfilePage = () => {
    const {isPremium} = useContext(UserContext);
    const {logout, username, userEmail, profilePicture} = useContext(AuthContext);

    const handleLogout = async () => {
        await logout();
        window.location.assign('/'); // Redirect to home page after logout
    };

    return (
        <div className="bg-white min-h-screen relative">
            <TopBar/>
            <div className="min-h-screen flex flex-col items-center">
                <div className="w-full max-w-6xl px-8 py-16">
                    <div className="flex flex-col items-center mb-8">
                        {profilePicture ? (
                            <img src={profilePicture} alt="Profile" className="w-24 h-24 rounded-full mb-4"/>
                        ) : (
                            <div className="w-24 h-24 bg-gray-300 rounded-full mb-4"></div>
                        )}
                        <h1 className="text-2xl text-black font-bold">Hey {username || 'User'}.</h1>
                    </div>
                    <div className="w-full">
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
                            <div
                                className="w-3/4 px-4 py-2 border rounded-lg bg-gray-100 text-black">{isPremium ? "Pro" : "Free"}</div>
                        </div>
                        <div className="flex items-center mb-4">
                            <label className="w-1/4 text-gray-700 font-medium">Manage Account:</label>
                            <button
                                onClick={handleLogout}
                                className="w-3/4 px-4 py-2 text-blue-600 border rounded-lg bg-white hover:bg-gray-50 mb-2">
                                Sign Out
                            </button>
                        </div>
                        <div className="flex items-center mb-4">
                            <label className="w-1/4 text-gray-700 font-medium">Manage Account:</label>
                            <button
                                className="w-3/4 px-4 py-2 text-red-600 border rounded-lg bg-white hover:bg-gray-50">
                                Delete Account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HOC(ProfilePage);
