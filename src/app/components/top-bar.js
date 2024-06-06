import * as React from "react";

export const TopBar = () => {
    return (
        <div className="flex flex-col pt-5 w-full max-w-screen-xl mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-5 w-full px-5">
                <div className="flex items-center gap-5">
                    <div className="flex flex-col justify-center items-center px-4 rounded-full bg-orange-200 bg-opacity-40 h-[50px] w-[50px] sm:h-[70px] sm:w-[70px] md:h-[89px] md:w-[89px]">
                        <div className="shrink-0 rounded-full bg-orange-200 bg-opacity-40 h-[35px] w-[35px] sm:h-[48px] sm:w-[48px] md:h-[61px] md:w-[61px]" />
                    </div>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-200">
                        Essence
                    </div>
                </div>
                <div className="flex items-center gap-5 mt-5 sm:mt-0">
                    <div className="text-lg sm:text-2xl md:text-3xl text-black">Pricing</div>
                    <button className="shrink-0 border-gray-200 border-solid border-[3px] h-[40px] sm:h-[60px] md:h-[80px] lg:h-[105px] rounded-[25px] sm:rounded-[35px] md:rounded-[50px] lg:rounded-[80px] w-[120px] sm:w-[180px] md:w-[240px] lg:w-[336px]">
                        <div className="text-base sm:text-lg md:text-xl lg:text-3xl font-bold text-black">Sign Up or Login</div>
                    </button>
                </div>
            </div>
            <div className="mt-5 sm:mt-7 w-full border-2 border-solid bg-stone-200 border-stone-200 min-h-[2px]" />
        </div>
    );
}
