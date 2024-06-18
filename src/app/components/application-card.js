import Image from 'next/image'; // Importing Image component from Next.js for optimized images
import React from 'react'; // Importing React library
import Link from 'next/link'; // Importing Link component from Next.js for client-side navigation

// Functional component ApplicationCard accepting props: name, major, acceptedSchools, imageUrl, resumeUrl
export const ApplicationCard = ({name, major, acceptedSchools = [], imageUrl, resumeUrl}) => {
    // Converting the acceptedSchools array to a comma-separated string
    const acceptedSchoolsString = acceptedSchools?.join(', ');

    return (
        // Main container with styling for card layout
        <div className="w-full sm:w-64 h-auto sm:h-80 rounded-lg overflow-hidden shadow-lg bg-white mt-10">
            {/* Container for the image with relative positioning */}
            <div className="relative w-full h-48">
                <Image
                    src={imageUrl} // Source of the image
                    alt={`${name}'s Application`} // Alt text for the image
                    layout="fill" // Setting image layout to fill the container
                    objectFit="cover" // Ensuring the image covers the container
                    className="rounded-t-lg" // Adding rounded corners to the top of the image
                />
                {/* Overlay text on the image */}
                <div className="absolute top-0 left-0 m-4 text-white">
                    <p className="bg-black bg-opacity-50 px-2 py-1 rounded">Application</p>
                    <h2 className="text-xl font-bold">{name}</h2>
                </div>
                {/* Link to the applicant's page with query parameters */}
                <Link href={{
                    pathname: "/applicant",
                    query: {
                        name: name,
                        major: major,
                        acceptedSchools: acceptedSchoolsString,
                        imageUrl: imageUrl,
                        resumeUrl: resumeUrl
                    }
                }}>
                    <button
                        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black font-bold py-2 px-4 rounded shadow-md">
                        Read {/* Button text */}
                    </button>
                </Link>
            </div>
            {/* Container for the applicant's details */}
            <div className="px-6 py-4">
                <p className="text-lg font-semibold text-black">Major: {major}</p> {/* Displaying major */}
                <p className="text-sm text-black"><span className="font-bold">Accepted:</span> {acceptedSchoolsString}</p> {/* Displaying accepted schools */}
            </div>
        </div>
    );
};
