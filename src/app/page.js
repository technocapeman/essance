"use client"; // Indicates that this code runs on the client side

import { useEffect, useContext, useState } from "react"; // Importing necessary hooks from React
import Image from 'next/image'; // Importing Image component from Next.js for optimized images
import { TopBar } from '@/app/components/top-bar'; // Importing TopBar component
import { SearchBar } from '@/app/components/search-bar'; // Importing SearchBar component
import { ApplicationCard } from '@/app/components/application-card'; // Importing ApplicationCard component
import { UserContext } from "@/app/infrastructure/contexts/user-context"; // Importing UserContext for user-related data
import { AuthContext } from "@/app/infrastructure/contexts/auth-context"; // Importing AuthContext for authentication-related data

// Functional component Home
function Home() {
    const { isAuth } = useContext(AuthContext); // Extracting isAuth from AuthContext
    const { setIsPremium, favoriteProfiles } = useContext(UserContext); // Extracting setIsPremium and favoriteProfiles from UserContext
    const [showBanner, setShowBanner] = useState(false); // State for managing banner visibility
    const [bannerMessage, setBannerMessage] = useState(""); // State for managing banner message

    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);
        if (query.get('success')) {
            console.log('Order placed! You will receive an email confirmation.');
            setIsPremium(true); // Update the isPremium state
            setBannerMessage("You are now on the Pro Plan"); // Set banner message
            setShowBanner(true); // Show the banner
        }

        if (query.get('canceled')) {
            console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
            setBannerMessage("Payment failed. Please try again."); // Set banner message
            setShowBanner(true); // Show the banner
        }
    }, [setIsPremium]); // Dependency array to trigger the effect when setIsPremium changes

    return (
        <div className="bg-white min-h-screen relative"> {/* Main container with white background and minimum height of screen */}
            <TopBar /> {/* Rendering TopBar component */}
            {showBanner && (
                <div className="w-full bg-orange-200 text-black text-center py-4 z-50"> {/* Banner container */}
                    <span className="font-bold">{bannerMessage}</span> {/* Banner message */}
                    <button
                        className="ml-4 bg-orange-400 px-2 py-1 rounded"
                        onClick={() => setShowBanner(false)} // Hide the banner when button is clicked
                    >
                        Dismiss
                    </button>
                </div>
            )}
            <div className="relative w-full h-screen"> {/* Container for the hero section */}
                <Image
                    src="/images/MITHomePage.jpg" // Source of the background image
                    layout="fill" // Make the image fill its container
                    objectFit="cover" // Cover the container
                    alt="Home Page Image" // Alt text for accessibility
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4"> {/* Overlay content */}
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold">Search Essays Now!</h1> {/* Main headline */}
                    <p className="mt-4 text-2xl sm:text-3xl md:text-4xl">
                        Browse our database of 3000+ verified essays and resumes
                    </p>
                    <div className="mt-8 w-full max-w-5xl">
                        {/* TODO: Use search bar input to filter essays */}
                        <SearchBar /> {/* Rendering SearchBar component */}
                    </div>
                </div>
            </div>
            <div className="p-6 sm:p-8 md:p-12 lg:pl-20"> {/* Container for main content */}
                {(isAuth && favoriteProfiles.length !== 0) && (
                    <div className="text-3xl sm:text-4xl md:text-5xl text-black font-bold mb-8">Your Favorite Profiles</div> // Title for favorite profiles section
                    )}
                <div className="text-3xl sm:text-4xl md:text-5xl text-black font-bold mb-8">Top Results For You</div> {/* Title for top results section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"> {/* Grid container for application cards */}
                    {[...Array(10)].map((_, index) => (
                        <div key={index} className="w-full">
                            <ApplicationCard
                                name="Ralph"
                                major="CS"
                                acceptedSchools={['MIT', 'Stanford', 'Yale']}
                                resumeUrl="https://drive.google.com/file/d/1Wz0gNSLx-i6bSEQrMlRLAFCWKS7-o3PU/view?usp=drivesdk"
                                imageUrl="/images/MITHomePage.jpg"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home; // Exporting Home component as default export
