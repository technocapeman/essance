// essay/page.js
"use client";
import React, { useContext, useState, useEffect } from 'react';
import { TopBar } from '../components/top-bar';
import { useSearchParams } from 'next/navigation';
import { AuthContext } from "@/app/infrastructure/contexts/auth-context";
import { HOC } from "@/app/hoc/hoc";
import { PaywallPopup } from '@/app/essay/components/paywall-popup';
import { UserContext } from "@/app/infrastructure/contexts/user-context";
import { LoginPopup } from "@/app/essay/components/login-popup";

function Essay() {
    const searchParams = useSearchParams();
    const { isAuth } = useContext(AuthContext);
    const { isPremium, profileViewUsed } = useContext(UserContext);
    const [showAuthPopup, setShowAuthPopup] = useState(false);
    const [showPaywall, setShowPaywall] = useState(false);

    useEffect(() => {
        if (!isAuth) {
            setShowAuthPopup(true);
        } else {
            if (!isPremium && profileViewUsed) {
                setShowPaywall(true);
            }
        }
    }, [isAuth, isPremium, profileViewUsed]);

    console.log(isAuth);
    console.log(isPremium);
    console.log(profileViewUsed);

    return (
        <div className="relative">
            <div className={`bg-white min-h-screen relative ${showAuthPopup || showPaywall ? 'filter blur-sm' : ''}`}>
                <TopBar />
                <div className="relative w-full p-20">
                    <h1 className="text-2xl text-black font-bold mb-4">
                        {searchParams.get("prompt")}
                    </h1>
                    <p className="text-gray-700 mb-2">
                        {searchParams.get("content")}
                    </p>
                </div>
            </div>
            {showAuthPopup && <LoginPopup />}
            {showPaywall && <PaywallPopup />}
        </div>
    );
}

export default HOC(Essay);
