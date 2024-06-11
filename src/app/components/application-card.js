import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

export const ApplicationCard = ({ name, major, acceptedSchools = [], imageUrl }) => {
    return (
        <div className="w-full sm:w-64 h-auto sm:h-80 rounded-lg overflow-hidden shadow-lg bg-white mt-10">
            <div className="relative w-full h-48">
                <Image
                    src={imageUrl}
                    alt={`${name}'s Application`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                />
                <div className="absolute top-0 left-0 m-4 text-white">
                    <p className="bg-black bg-opacity-50 px-2 py-1 rounded">Application</p>
                    <h2 className="text-xl font-bold">{name}</h2>
                </div>
                <Link href='applicant'>
                <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black font-bold py-2 px-4 rounded shadow-md">
                    Read
                </button>
                </Link>
            </div>
            <div className="px-6 py-4">
                <p className="text-lg font-semibold text-black">Major: {major}</p>
                <p className="text-sm text-black"><span className="font-bold">Accepted:</span> {acceptedSchools?.join(', ')}</p>
            </div>
        </div>
    );
};
