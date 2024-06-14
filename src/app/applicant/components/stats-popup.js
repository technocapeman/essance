import React from 'react';

export const StatsPopup = ({isOpen, onClose}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-black text-white rounded-lg p-6 max-w-xs mx-auto">
                <h2 className="text-xl font-bold mb-2">Stats</h2>
                <p className="text-gray-400 mb-4">Academic Statistics</p>
                <p className="mb-2"><span className="font-semibold">SAT/ACT:</span> 1540</p>
                <p className="mb-2"><span className="font-semibold">GPA (Unweighted):</span> 4.0</p>
                <p className="mb-2"><span className="font-semibold">GPA (Weighted):</span> 5.5/5</p>
                <p className="mb-6"><span className="font-semibold">Rank:</span> 4</p>
                <button onClick={onClose} className="w-full bg-white text-black py-2 rounded-md">
                    Close
                </button>
            </div>
        </div>
    );
};
