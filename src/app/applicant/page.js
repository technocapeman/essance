"use client"
import { useState } from 'react';
import { TopBar } from "../components/top-bar";
import Image from "next/image";
import { EssayCard } from './components/essay-card';
import {StatsPopup} from "./components/stats-popup";
import { useSearchParams } from 'next/navigation';
import {HOC} from "@/app/infrastructure/hoc/hoc";

function Applicant() {
    const [isStatsOpen, setIsStatsOpen] = useState(false);

    const openStats = () => setIsStatsOpen(true);
    const closeStats = () => setIsStatsOpen(false);

    const searchParams = useSearchParams();

    return (
        <div className="bg-white min-h-screen relative">
            <TopBar />
            <div className="relative w-full">
                <div className="w-full h-72 relative overflow-hidden">
                    <Image
                        src={searchParams.get("imageUrl")}
                        layout="fill"
                        objectFit="cover"
                        alt="Home Page Image"
                    />
                    <button
                        onClick={openStats}
                        className="absolute top-4 left-4 px-4 py-2 bg-white text-black rounded-md z-10" // Adjusted z-index
                    >
                        View Stats
                    </button>
                    <button
                        className="absolute top-4 right-4 px-4 py-2 bg-white text-black rounded-md z-10" // Adjusted z-index
                    >
                        View Resume
                    </button>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 mt-10">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold">Read {searchParams.get("name")}'s Essays</h1>
                    <p className="mt-4 text-2xl sm:text-3xl md:text-4xl">
                        Accepted: {searchParams.get("acceptedSchools")}
                    </p>
                    <p className="mt-4 text-2xl sm:text-3xl md:text-4xl">
                        Major: {searchParams.get("major")}
                    </p>
                </div>
            </div>
            <div className="p-6 sm:p-8 md:p-12 lg:pl-20">
                <div className="text-3xl sm:text-4xl md:text-5xl text-black font-bold mb-8">MIT</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pb-20">
                    <EssayCard essayPrompt="Why MIT?" essayContent="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a" />
                    <EssayCard essayPrompt="Why did you choose your major?" essayContent="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a" />
                    <EssayCard essayPrompt="Why did you choose your major?" essayContent="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a" />
                </div>

                <div className="text-3xl sm:text-4xl md:text-5xl text-black font-bold mb-8">Stanford</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pb-20">
                    <EssayCard essayPrompt="Why Stanford?" essayContent="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a" />
                    <EssayCard essayPrompt="Why did you choose your major?" essayContent="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a" />
                    <EssayCard essayPrompt="Why did you choose your major?" essayContent="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a" />
                </div>

                <div className="text-3xl sm:text-4xl md:text-5xl text-black font-bold mb-8">Yale</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pb-20">
                    <EssayCard essayPrompt="Why Yale?" essayContent="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a" />
                    <EssayCard essayPrompt="Why did you choose your major?" essayContent="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a" />
                    <EssayCard essayPrompt="Why did you choose your major?" essayContent="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a" />
                </div>
            </div>
            <StatsPopup isOpen={isStatsOpen} onClose={closeStats} />
        </div>
    );
}

export default HOC(Applicant);
