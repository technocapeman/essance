import React from 'react';
import Link from "next/link";

export const EssayCard = ({ essayPrompt, essayContent }) => {
    return (
        <div className="w-full p-4">
            <h2 className="text-xl font-semibold text-black mb-2 pb-4">{essayPrompt.substring(0, 100)}</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
                {essayContent.substring(0, 255)}
            </p>
            <Link href={{
                pathname: "/essay",
                query: {
                    prompt: essayPrompt,
                    content: essayContent
                }
            }}>
                <p className="block mt-2 text-black font-bold">
                    Read
                </p>
            </Link>
        </div>
    );
};
