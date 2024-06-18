import React from 'react'; // Importing React library

// Functional component StatsPopup accepting props isOpen and onClose
export const StatsPopup = ({isOpen, onClose}) => {
    // If the popup is not open, return null to render nothing
    if (!isOpen) return null;

    return (
        // Overlay div covering the entire screen with a semi-transparent black background
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            {/* Popup container with black background, white text, and rounded corners */}
            <div className="bg-black text-white rounded-lg p-6 max-w-xs mx-auto">
                {/* Popup title */}
                <h2 className="text-xl font-bold mb-2">Stats</h2>
                {/* Subtitle */}
                <p className="text-gray-400 mb-4">Academic Statistics</p>
                {/* Displaying various statistics; TODO: Make stats dynamic for each user by calling from Firestore */}
                <p className="mb-2"><span className="font-semibold">SAT/ACT:</span> 1540</p>
                <p className="mb-2"><span className="font-semibold">GPA (Unweighted):</span> 4.0</p>
                <p className="mb-2"><span className="font-semibold">GPA (Weighted):</span> 5.5/5</p>
                <p className="mb-6"><span className="font-semibold">Rank:</span> 4</p>
                {/* Close button to trigger the onClose function */}
                <button onClick={onClose} className="w-full bg-white text-black py-2 rounded-md">
                    Close
                </button>
            </div>
        </div>
    );
};
