"use client";
import { useContext } from "react";
import { TopBar } from "@/app/components/top-bar";
import { AuthContext } from "@/app/infrastructure/contexts/auth-context";
import {UserContext} from "@/app/infrastructure/contexts/user-context";

const Pricing = () => {
    const { isAuth, signInWithGoogle } = useContext(AuthContext);
    const { isPremium } = useContext(UserContext);

    const handleGetStartedClick = async () => {
        if (!isAuth) {
            // Authenticate the user with Google Sign-In and wait for completion
            try {
                await signInWithGoogle();
            } catch (error) {
                console.error('Authentication error:', error);
                return;
            }
        }

        // Create a Stripe checkout session
        const response = await fetch('/api/checkout_sessions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const session = await response.json();
            if (session.url) {
                // Redirect to the Stripe payment page
                window.location.href = session.url;
            } else {
                console.error('Session URL not found in response');
            }
        } else {
            console.error('Error creating Stripe session:', response.statusText);
        }
    };

    return (
        <div className="bg-white min-h-screen relative">
            <TopBar />
            <div className="bg-white min-h-screen flex flex-col items-center justify-center p-6">
                <h1 className="text-3xl text-black font-bold mb-2">Get unlimited access.</h1>
                <p className="text-gray-600 mb-10">Get access to all the profiles, essays, and resumes for just 20 dollars.</p>
                <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex flex-col items-center border rounded-lg p-6 w-full sm:w-80">
                        <h2 className="text-xl text-gray-600 font-bold mb-2">Free</h2>
                        <p className="text-gray-600 mb-4">For casual browsers</p>
                        <div className="text-2xl text-gray-600 font-bold mb-4 mt-4">$0</div>
                        <div className="mb-6" />
                        {(isAuth && !isPremium) &&
                            (
                                <div
                                    className="bg-white border border-gray-300 text-black py-2 px-4 rounded-lg mb-4 hover:bg-gray-100"
                                >
                                    You are on this plan
                                </div>
                            )}
                        {(!isAuth) && (
                            <button
                                className="bg-white border border-gray-300 text-black py-2 px-4 rounded-lg mb-4 hover:bg-gray-100"
                                onClick={async () => {
                                    try {
                                        await signInWithGoogle();
                                        // Redirect to home page after successful sign-in
                                        window.location.href = "/";
                                    } catch (error) {
                                        console.error('Authentication error:', error);
                                    }
                                }}
                            >
                                Get started
                            </button>
                        )}
                        <ul className="text-gray-600">
                            <li>• Access to one student profile of choice</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center bg-black text-white rounded-lg p-6 w-full sm:w-80">
                        <h2 className="text-xl font-bold mb-2">Pro</h2>
                        <p className="text-gray-400 mb-4">For College Applicants</p>
                        <div className="text-2xl font-bold mb-4">$50</div>
                        <div className="text-gray-400 mb-4">For six months</div>
                        <button
                            className="bg-white text-black py-2 px-4 rounded-lg mb-4 hover:bg-gray-100"
                            onClick={handleGetStartedClick}
                        >
                            Get started
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

export default Pricing;
