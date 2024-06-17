"use client"
import { useEffect, useContext, useState } from "react";
import Image from 'next/image';
import { TopBar } from '@/app/components/top-bar';
import { SearchBar } from '@/app/components/search-bar';
import { ApplicationCard } from '@/app/components/application-card';
import { UserContext } from "@/app/infrastructure/contexts/user-context";
import {AuthContext} from "@/app/infrastructure/contexts/auth-context";

function Home() {
    const { isAuth } = useContext(AuthContext);
    const { setIsPremium, favoriteProfiles } = useContext(UserContext);
    const [showBanner, setShowBanner] = useState(false);
    const [bannerMessage, setBannerMessage] = useState("");

    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);  // TODO: Replace query params with webhooks and Firestore for fraud prevention
        if (query.get('success')) {
            console.log('Order placed! You will receive an email confirmation.');
            setIsPremium(true); // Update the isPremium state
            setBannerMessage("You are now on the Pro Plan");
            setShowBanner(true); // Show the banner
        }

        if (query.get('canceled')) {
            console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
            setBannerMessage("Payment failed. Please try again.");
            setShowBanner(true); // Show the banner
        }
    }, [setIsPremium]);

    return (
        <div className="bg-white min-h-screen relative">
            <TopBar />
            {showBanner && (
                <div className="w-full bg-orange-200 text-black text-center py-4 z-50">
                    <span class="font-bold">{bannerMessage}</span>
                    <button
                        className="ml-4 bg-orange-400 px-2 py-1 rounded"
                        onClick={() => setShowBanner(false)}
                    >
                        Dismiss
                    </button>
                </div>
            )}
            <div className="relative w-full h-screen">
                <Image
                    src="/images/MITHomePage.jpg"
                    layout="fill"
                    objectFit="cover"
                    alt="Home Page Image"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold">Search Essays Now!</h1>
                    <p className="mt-4 text-2xl sm:text-3xl md:text-4xl">
                        Browse our database of 3000+ verified essays and resumes
                    </p>
                    <div className="mt-8 w-full max-w-5xl">
                        <SearchBar />
                    </div>
                </div>
            </div>
            <div className="p-6 sm:p-8 md:p-12 lg:pl-20">
                {(isAuth && favoriteProfiles.length !== 0) && (
                    <div className="text-3xl sm:text-4xl md:text-5xl text-black font-bold mb-8">Your Favorite Profiles</div>
                )}
                <div className="text-3xl sm:text-4xl md:text-5xl text-black font-bold mb-8">Top Results For You</div>
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
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

export default Home;
