// components/login-popup.js
import React from 'react';

export const LoginPopup = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-black bg-opacity-50 absolute inset-0"></div>
            <div className="relative bg-white rounded-lg overflow-hidden z-10 shadow-lg w-96">
                <img src="/images/MITHomePage.jpg" alt="Popup Background" className="w-full h-48 object-cover" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                    <h2 className="text-2xl font-bold mb-2">Create an Account</h2>
                    <p className="text-center mb-4">Sign up now to view one free profile!</p>
                    <div className="bg-white text-black py-2 px-4 rounded-lg font-bold">Sign Up</div>
                </div>
            </div>
        </div>
    );
};
