"use client"
import React from 'react';
import {TopBar} from '../components/top-bar';
import { useSearchParams } from 'next/navigation';


export default function Essay() {
    const searchParams = useSearchParams();

    return (
        <div className="bg-white min-h-screen relative">
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
      );
}
