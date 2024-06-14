// components/paywall-popup.js
import React from 'react';

export const PaywallPopup = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-black bg-opacity-50 absolute inset-0"></div>
            <div className="relative bg-white rounded-lg overflow-hidden z-10 shadow-lg w-96">
                <img src="/images/MITHomePage.jpg" alt="Popup Background" className="w-full h-48 object-cover" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                    <h2 className="text-2xl font-bold mb-2">Get Unlimited</h2>
                    <p className="text-center mb-4">Unlimited access for a one time $20 unlock fee!</p>
                    <div className="bg-white text-black py-2 px-4 rounded-lg font-bold">Buy Now!</div>
                </div>
            </div>
        </div>
    );
};
