"use client";
import React from 'react';
import {TopBar} from "@/app/components/top-bar";
import {HOC} from "@/app/infrastructure/hoc/hoc";

const Pricing = () => {
    return (
        <div className="bg-white min-h-screen relative">
            <TopBar/>
            <div className="bg-white min-h-screen flex flex-col items-center justify-center p-6">
                <h1 className="text-3xl text-black font-bold mb-2">Get unlimited access.</h1>
                <p className="text-gray-600 mb-10">Get access to all the profiles, essays, and resumes for just 20
                    dollars.</p>
                <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex flex-col items-center border rounded-lg p-6 w-full sm:w-80">
                        <h2 className="text-xl text-gray-600 font-bold mb-2">Free</h2>
                        <p className="text-gray-600 mb-4">For casual browsers</p>
                        <div className="text-2xl text-gray-600 font-bold mb-4 mt-4">$0</div>
                        <div className="mb-6"/>
                        <button
                            className="bg-white border border-gray-300 text-black py-2 px-4 rounded-lg mb-4 hover:bg-gray-100">Get
                            started
                        </button>
                        <ul className="text-gray-600">
                            <li>• Access to one student profile of choice</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center bg-black text-white rounded-lg p-6 w-full sm:w-80">
                        <h2 className="text-xl font-bold mb-2">Pro</h2>
                        <p className="text-gray-400 mb-4">For College Applicants</p>
                        <div className="text-2xl font-bold mb-4">$20</div>
                        <div className="text-gray-400 mb-4">For six months</div>
                        <button className="bg-white text-black py-2 px-4 rounded-lg mb-4 hover:bg-gray-100">Get
                            started
                        </button>
                        <ul className="text-gray-400">
                            <li>• Unlimited access to student profiles for six months</li>
                            <li>• Access to Beta Features</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HOC(Pricing);
