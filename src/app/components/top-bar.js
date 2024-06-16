'use client'
import {useContext} from "react";
import Link from "next/link";
import {AuthContext} from "@/app/infrastructure/contexts/auth-context";
import {UserContext} from "@/app/infrastructure/contexts/user-context";

export const TopBar = () => {
    const {isAuth, signInWithGoogle, username} = useContext(AuthContext);
    const {isPremium} = useContext(UserContext);

    return (
        <div className="w-full bg-white">
            <div className="flex flex-wrap items-center justify-between w-full px-5 py-3">
                <a href="/">
                    <div className="flex items-center gap-3">
                        <div
                            className="flex flex-col justify-center items-center px-2 rounded-full bg-orange-200 bg-opacity-40 h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] md:h-[60px] md:w-[60px]">
                            <div
                                className="shrink-0 rounded-full bg-orange-200 bg-opacity-40 h-[28px] w-[28px] sm:h-[38px] sm:w-[38px] md:h-[45px] md:w-[45px]"/>
                        </div>
                        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-200">
                            Essance
                        </div>
                    </div>
                </a>
                <div
                    className="flex items-center gap-8 mt-4 sm:mt-0 flex-wrap justify-center sm:justify-end w-full sm:w-auto">
                    {!isPremium && (
                        <Link href="/pricing">
                            <div className="text-md sm:text-lg md:text-xl text-black">Pricing</div>
                        </Link>
                    )}
                    {isAuth ? (
                        <button
                            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-500 rounded-full shadow transition duration-200 hover:shadow-md focus:shadow-md"
                        >
                            <Link href="/account">
                                <p className="text-xl text-black">My Account</p>
                            </Link>
                        </button>
                    ) : (
                        <button
                            onClick={signInWithGoogle}
                            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-500 rounded-full shadow transition duration-200 hover:shadow-md focus:shadow-md"
                        >
                            <svg className="h-5 w-5" version="1.1" viewBox="0 0 48 48">
                                <path fill="#EA4335"
                                      d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                                <path fill="#4285F4"
                                      d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                                <path fill="#FBBC05"
                                      d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                                <path fill="#34A853"
                                      d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                                <path fill="none" d="M0 0h48v48H0z"></path>
                            </svg>
                            <span className="text-black font-medium">Sign in with Google</span>
                        </button>
                    )}
                </div>
            </div>
            <div className="w-full border-t-2 border-stone-200 bg-stone-200 min-h-[2px]"/>
        </div>
    );
}
