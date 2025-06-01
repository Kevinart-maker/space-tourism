'use client';

import { useState } from 'react';
import destinationData from '../data/data.json';
import Image from 'next/image';

type Destination = {
    name: string;
    images: {
        png?: string;
        webp: string;
    };
    description: string;
    distance: string;
    travel: string;
};

const destinations = destinationData.destinations as Destination[];

export default function Page() {
    const [current, setCurrent] = useState(0);

    const handleSelect = (idx: number) => setCurrent(idx);

    const currentDestination = destinations[current];

    // Fallback for missing PNGs, use webp if png is not available
    const imageSrc =
        (currentDestination.images.png
            ? currentDestination.images.png
            : currentDestination.images.webp
        ).replace('./', '/');

    return (
        <div className="destination h-[100vh] w-full flex flex-col gap-12 lg:justify-between justify-center lg:px-[10rem] lg:py-[10rem]">
            <header className="flex gap-4 navbar text-2xl letter">
                <span className="opacity-65">01</span>
                <h1 className="font-semibold">PICK YOUR DESTINATION</h1>
            </header>
            <div className="flex flex-col lg:flex-row gap-12 transition-all duration-500">
                {/* Carousel Slide */}
                <div className="flex gap-12 items-center w-full transition-all duration-500">
                    <Image
                        src={imageSrc}
                        alt={currentDestination.name}
                        width={731.33}
                        height={731.33}
                        className="w-[20rem] object-contain mb-4 transition-all duration-500"
                        priority
                    />
                    <div>
                        {/* Carousel Navigation */}
                        <div className="flex flex-row gap-6 mb-6 lg:mb-0">
                            {destinations.map((item, idx) => (
                                <button
                                    key={item.name}
                                    className={`uppercase tracking-widest px-2 py-1 text-lg font-semibold ${
                                        idx === current
                                            ? 'border-b-2 border-[var(--primary)] text-white'
                                            : 'text-gray-400 hover:text-white'
                                    }`}
                                    onClick={() => handleSelect(idx)}
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>

                        <h2 className="text-3xl heading-bellefair mb-2">{currentDestination.name}</h2>
                        <p className="text-base text-gray-300 mb-6 max-w-md">{currentDestination.description}</p>
                        <div className="flex gap-8 w-full text-xs text-gray-400">
                            <span>
                                <strong className="text-white">Distance:</strong> {currentDestination.distance}
                            </span>
                            <span>
                                <strong className="text-white">Travel Time:</strong> {currentDestination.travel}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}