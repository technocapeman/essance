'use client'
import {useContext} from 'react';
import {UserContext} from "@/app/infrastructure/contexts/user-context";
import {HOC} from "@/app/infrastructure/hoc/hoc";
import {TopBar} from "@/app/components/top-bar";

const ProfilePage = () => {
    const {isPremium} = useContext(UserContext);

    return (
        <div className="bg-white min-h-screen relative">
            <TopBar/>
            <div className="min-h-screen flex flex-col items-center">
                <div className="w-full max-w-6xl px-8 py-16">
                    <div className="flex flex-col items-center mb-8">
                        <div className="w-24 h-24 bg-gray-300 rounded-full mb-4"></div>
                        <h1 className="text-2xl text-black font-bold">Hey Eeshwar.</h1>
                    </div>
                    <div className="w-full">
                        <div className="flex items-center mb-4">
                            <label className="w-1/4 text-gray-700 font-medium">Full Name:</label>
                            <div className="w-3/4 px-4 py-2 border rounded-lg bg-gray-100 text-black">Eeshwar
                                Parasuramuni
                            </div>
                        </div>
                        <div className="flex items-center mb-4">
                            <label className="w-1/4 text-gray-700 font-medium">Email:</label>
                            <div
                                className="w-3/4 px-4 py-2 border rounded-lg bg-gray-100 text-black">eeshpara@gmail.com
                            </div>
                        </div>
                        <div className="flex items-center mb-4">
                            <label className="w-1/4 text-gray-700 font-medium">Plan:</label>
                            <div
                                className="w-3/4 px-4 py-2 border rounded-lg bg-gray-100 text-black">{isPremium ? "Pro" : "Free"}</div>
                        </div>
                        <div className="flex items-center mb-4">
                            <label className="w-1/4 text-gray-700 font-medium">Manage Account:</label>
                            <button
                                className="w-3/4 px-4 py-2 text-blue-600 border rounded-lg bg-white hover:bg-gray-50">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HOC(ProfilePage);
