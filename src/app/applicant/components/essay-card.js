import React from 'react'; // Importing React library
import Link from "next/link"; // Importing Link component from Next.js for client-side navigation

// Functional component EssayCard accepting props essayPrompt and essayContent
export const EssayCard = ({essayPrompt, essayContent}) => {
    return (
        <div className="w-full p-4"> {/* Wrapper div with full width and padding */}
            <h2 className="text-xl font-semibold text-black mb-2 pb-4">
                {/* Displaying the first 100 characters of the essay prompt */}
                {essayPrompt.substring(0, 100)}
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
                {/* Displaying the first 255 characters of the essay content */}
                {essayContent.substring(0, 255)}
            </p>
            {/* Link to navigate to the essay page with prompt and content as query parameters */}
            <Link href={{
                pathname: "/essay",
                query: {
                    prompt: essayPrompt,
                    content: essayContent
                }
            }}>
                <p className="block mt-2 text-black font-bold">
                    Read {/* Text for the link */}
                </p>
            </Link>
        </div>
    );
};
