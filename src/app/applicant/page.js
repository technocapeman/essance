"use client"; // Indicates that this code runs on the client side
import {useContext, useState} from 'react'; // Importing useContext and useState hooks from React
import { TopBar } from "../components/top-bar"; // Importing TopBar component
import Image from "next/image"; // Importing Image component from Next.js for optimized images
import { EssayCard } from './components/essay-card'; // Importing EssayCard component
import { StatsPopup } from "./components/stats-popup"; // Importing StatsPopup component
import { useSearchParams } from 'next/navigation'; // Importing useSearchParams hook from Next.js for URL query parameters
import { FaHeart } from 'react-icons/fa'; // Import heart icon from react-icons
import {AuthContext} from "@/app/infrastructure/contexts/auth-context"; // Importing AuthContext for authentication-related data

function Applicant() {
    const {isAuth} = useContext(AuthContext); // Extracting isAuth from AuthContext
    const [isStatsOpen, setIsStatsOpen] = useState(false); // State for managing the visibility of stats popup
    const [isFavorite, setIsFavorite] = useState(false); // State for managing favorite status

    const openStats = () => setIsStatsOpen(true); // Function to open stats popup
    const closeStats = () => setIsStatsOpen(false); // Function to close stats popup
    const toggleFavorite = () => setIsFavorite(!isFavorite); // Function to toggle favorite status

    const searchParams = useSearchParams(); // Hook to get URL query parameters

    return (
        <div className="bg-white min-h-screen relative"> {/* Main container with background color and min-height */}
            <TopBar /> {/* Rendering TopBar component */}
            <div className="relative w-full"> {/* Relative positioned container with full width */}
                <div className="w-full h-72 relative overflow-hidden"> {/* Container for the main image with height and overflow hidden */}
                    <Image
                        src={searchParams.get("imageUrl")} // Getting imageUrl from query parameters
                        layout="fill"
                        objectFit="cover"
                        alt="Home Page Image"
                    />
                    <button
                        onClick={openStats} // Function to open stats popup
                        className="absolute top-4 left-4 px-4 py-2 bg-white text-black rounded-md z-20"
                    >
                        View Stats
                    </button>
                    <a target="_blank" rel="noopener noreferrer" href={searchParams.get("resumeUrl")}> {/* Link to view resume */}
                        <button
                            className="absolute top-16 left-4 px-4 py-2 bg-white text-black rounded-md z-20"
                        >
                            View Resume
                        </button>
                    </a>
                    <button
                        onClick={toggleFavorite} // Function to toggle favorite status
                        className="absolute top-4 right-4 z-20"
                    >
                        {isAuth && <FaHeart color={isFavorite ? "red" : "white"} size={24} />} {/* Heart icon indicating favorite status */}
                    </button>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 z-10">
                        <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold mt-20">
                            Read {searchParams.get("name")}'s Essays {/* Displaying name from query parameters */}
                        </h1>
                        <p className="mt-2 text-xl sm:text-2xl md:text-3xl">
                            Accepted: {searchParams.get("acceptedSchools")} {/* Displaying accepted schools from query parameters */}
                        </p>
                        <p className="mt-2 text-xl sm:text-2xl md:text-3xl">
                            Major: {searchParams.get("major")} {/* Displaying major from query parameters */}
                        </p>
                    </div>
                </div>
            </div>
            {/* TODO: Dynamically retrieve essay data from Cloud Firestore and pass essays to applicant page and essay page */}
            <div className="p-6 sm:p-8 md:p-12 lg:pl-20"> {/* Container for essay sections with padding */}
                <div className="text-3xl sm:text-4xl md:text-5xl text-black font-bold mb-8">MIT</div> {/* Title for MIT section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pb-20"> {/* Grid layout for essay cards */}
                    <EssayCard essayPrompt="Why MIT?" essayContent="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a" />
                    <EssayCard essayPrompt="Why did you choose your major?" essayContent="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a" />
                    <EssayCard essayPrompt="Why did you choose your major?" essayContent="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a" />
                </div>

                <div className="text-3xl sm:text-4xl md:text-5xl text-black font-bold mb-8">Stanford</div> {/* Title for Stanford section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pb-20"> {/* Grid layout for essay cards */}
                    <EssayCard essayPrompt="Why Stanford?" essayContent="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a" />
                    <EssayCard essayPrompt="Why did you choose your major?" essayContent="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a" />
                    <EssayCard essayPrompt="Why did you choose your major?" essayContent="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a" />
                </div>

                <div className="text-3xl sm:text-4xl md:text-5xl text-black font-bold mb-8">Yale</div> {/* Title for Yale section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pb-20"> {/* Grid layout for essay cards */}
                    <EssayCard essayPrompt="Why Yale?" essayContent="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a" />
                    <EssayCard essayPrompt="Why did you choose your major?" essayContent="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a" />
                    <EssayCard essayPrompt="Why did you choose your major?" essayContent="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a" />
                </div>
            </div>
            <StatsPopup isOpen={isStatsOpen} onClose={closeStats} /> {/* Rendering StatsPopup component */}
        </div>
    );
}

export default Applicant; // Exporting Applicant component as default export
