"use client"; // Indicates that this code runs on the client side

import { useContext } from "react"; // Importing useContext hook from React
import { TopBar } from "@/app/components/top-bar"; // Importing TopBar component
import { AuthContext } from "@/app/infrastructure/contexts/auth-context"; // Importing AuthContext for authentication-related data
import { UserContext } from "@/app/infrastructure/contexts/user-context"; // Importing UserContext for user-related data

// Functional component Pricing
const Pricing = () => {
    // Extracting authentication status and sign-in function from AuthContext
    const { isAuth, signInWithGoogle } = useContext(AuthContext);
    // Extracting premium status from UserContext
    const { isPremium } = useContext(UserContext);

    // Function to handle "Get Started" button click
    const handleGetStartedClick = async () => {
        if (!isAuth) {
            // Authenticate the user with Google Sign-In and wait for completion
            try {
                await signInWithGoogle();
            } catch (error) {
                console.error('Authentication error:', error); // Log any authentication errors
                return;
            }

            // TODO: Check to see if the newly authenticated user is on the Pro plan
        }

        if (!isPremium) {
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
                    console.error('Session URL not found in response'); // Log error if session URL is not found
                }
            } else {
                console.error('Error creating Stripe session:', response.statusText); // Log error if response is not ok
            }
        }
    };

    return (
        <div className="bg-white min-h-screen relative"> {/* Main container with white background and full viewport height */}
            <TopBar /> {/* Rendering TopBar component */}
            <div className="bg-white min-h-screen flex flex-col items-center justify-center p-6">
                <h1 className="text-3xl text-black font-bold mb-2">Get unlimited access.</h1> {/* Page title */}
                <p className="text-gray-600 mb-10">Get access to all the profiles, essays, and resumes for just 20 dollars.</p> {/* Description */}
                <div className="flex flex-col sm:flex-row gap-6"> {/* Flex container for pricing options */}
                    <div className="flex flex-col items-center border rounded-lg p-6 w-full sm:w-80"> {/* Free plan card */}
                        <h2 className="text-xl text-gray-600 font-bold mb-2">Free</h2> {/* Plan name */}
                        <p className="text-gray-600 mb-4">For casual browsers</p> {/* Plan description */}
                        <div className="text-2xl text-gray-600 font-bold mb-4 mt-4">$0</div> {/* Plan price */}
                        <div className="mb-6" />
                        {(isAuth && !isPremium) && (
                            <div className="bg-white border border-gray-300 text-black py-2 px-4 rounded-lg mb-4 hover:bg-gray-100">
                                You are on this plan {/* Current plan indication */}
                            </div>
                        )}
                        {(!isAuth) && (
                            <button
                                className="bg-white border border-gray-300 text-black py-2 px-4 rounded-lg mb-4 hover:bg-gray-100"
                                onClick={async () => {
                                    try {
                                        await signInWithGoogle(); // Sign in with Google
                                        // Redirect to home page after successful sign-in
                                        window.location.href = "/";
                                    } catch (error) {
                                        console.error('Authentication error:', error); // Log any authentication errors
                                    }
                                }}
                            >
                                Get started {/* Button text */}
                            </button>
                        )}
                        <ul className="text-gray-600">
                            <li>• Access to one student profile of choice</li> {/* Plan feature */}
                        </ul>
                    </div>
                    <div className="flex flex-col items-center bg-black text-white rounded-lg p-6 w-full sm:w-80"> {/* Pro plan card */}
                        <h2 className="text-xl font-bold mb-2">Pro</h2> {/* Plan name */}
                        <p className="text-gray-400 mb-4">For College Applicants</p> {/* Plan description */}
                        <div className="text-2xl font-bold mb-4">$50</div> {/* Plan price */}
                        <div className="text-gray-400 mb-4">For six months</div> {/* Plan duration */}
                        <button
                            className="bg-white text-black py-2 px-4 rounded-lg mb-4 hover:bg-gray-100"
                            onClick={handleGetStartedClick} // Handle "Get Started" button click
                        >
                            Get started {/* Button text */}
                        </button>
                        <ul className="text-gray-400">
                            <li>• Unlimited access to student profiles for six months</li> {/* Plan feature */}
                            <li>• Access to Beta Features</li> {/* Plan feature */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing; // Exporting Pricing component as default export
