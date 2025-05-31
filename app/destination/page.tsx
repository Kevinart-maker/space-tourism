import destinationData from '../data/data.json';
import Image from 'next/image';

type Destination = {
    name: string;
    images: {
        png: string;
        webp: string;
    };
    description: string;
    distance: string;
    travel: string;
};

export default function Page() {
    return (
        <div className="destination h-[100vh] w-full flex flex-col items-center lg:items-end">
            <header className="flex gap-4 heading-bellefair mb-8">
                <span className="opacity-65">01</span>
                <h1 className="font-semibold">PICK YOUR DESTINATION</h1>
            </header>
            <div className="flex flex-wrap gap-8 justify-center w-full">
                {(destinationData.destinations as Destination[]).map((item) => (
                    <div
                        key={item.name}
                        className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col items-center w-64"
                    >
                        <Image
                            src={item.images.png.replace('./', '/')}
                            alt={item.name}
                            width={128}
                            height={128}
                            className="w-32 h-32 object-contain mb-4"
                            priority
                        />
                        <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
                        <p className="text-sm text-gray-300 mb-4 text-center">{item.description}</p>
                        <div className="flex justify-between w-full text-xs text-gray-400">
                            <span>
                                <strong className="text-white">Distance:</strong> {item.distance}
                            </span>
                            <span>
                                <strong className="text-white">Travel Time:</strong> {item.travel}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}