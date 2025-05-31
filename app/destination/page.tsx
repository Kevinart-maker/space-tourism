import destination from '../data/data.json';

export default function Page() {
    return (
        <div className="destination h-[100vh] w-full flex flex-col items-center lg:items-end">
            <header className="flex gap-4 heading-bellefair mb-8">
                <span className="opacity-65">01</span>
                <h1 className="font-semibold">PICK YOUR DESTINATION</h1>
            </header>
            <div className="flex flex-wrap gap-8 justify-center w-full">
                {destination.destinations.map((item: any) => (
                    <div
                        key={item.name}
                        className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col items-center w-64"
                    >
                        <img
                            src={item.images?.png || item.images?.webp}
                            alt={item.name}
                            className="w-32 h-32 object-contain mb-4"
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