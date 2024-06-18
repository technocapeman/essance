// components/paywall-popup.js

import React from 'react'; // Importing React library
import Link from "next/link"; // Importing Link component from Next.js for client-side navigation

// Functional component PaywallPopup
export const PaywallPopup = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50"> {/* Container for the popup, fixed position covering the entire viewport */}
            <div className="bg-black bg-opacity-50 absolute inset-0"></div> {/* Semi-transparent black background */}
            <div className="relative bg-white rounded-lg overflow-hidden z-10 shadow-lg w-96"> {/* Popup container with white background and rounded corners */}
                <img src="/images/MITHomePage.jpg" alt="Popup Background" className="w-full h-48 object-cover"/> {/* Background image */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4"> {/* Container for the popup content */}
                    <h2 className="text-2xl font-bold mb-2">Get Unlimited</h2> {/* Title */}
                    <p className="text-center mb-4">Unlimited access for a one time $20 unlock fee!</p> {/* Description */}
                    <Link href="pricing"> {/* Link to the pricing page */}
                        <button className="bg-white text-black py-2 px-4 rounded-lg font-bold">Buy Now!</button> {/* Button to navigate to the pricing page */}
                    </Link>
                </div>
            </div>
        </div>
    );
};
