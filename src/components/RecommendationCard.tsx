import { GlassCard } from './ui/GlassCard';
import { Star, MapPin, ExternalLink } from 'lucide-react';

export const RecommendationCard = ({ type, data }: { type: 'hotel' | 'flight', data: any }) => {
    if (type === 'flight') {
        return (
            <GlassCard className="p-6 flex flex-col md:flex-row items-center justify-between gap-6 hover:bg-white/5 transition-colors">
                <div className="flex items-center gap-4 w-full md:w-auto">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center font-bold text-black border shadow-sm">
                        {data.logo}
                    </div>
                    <div>
                        <h4 className="font-bold text-lg">{data.airline}</h4>
                        <p className="text-sm text-gray-500">{data.type}</p>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-1">
                    <span className="text-xl font-bold">{data.time}</span>
                    <span className="text-xs text-gray-400">{data.duration}</span>
                </div>

                <div className="flex flex-col items-end gap-2 w-full md:w-auto">
                    <span className="text-2xl font-bold text-blue-500">{data.price}</span>
                    <button className="px-4 py-2 rounded-lg bg-blue-500/10 text-blue-500 hover:bg-blue-500 hover:text-white transition-all text-sm font-bold w-full md:w-auto">
                        Book Now
                    </button>
                </div>
            </GlassCard>
        );
    }

    // Hotel Card
    return (
        <GlassCard className="p-0 overflow-hidden group hover:scale-[1.02] transition-transform">
            <div className="h-48 relative">
                <img src={data.image} alt={data.name} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-2 py-1 rounded flex items-center gap-1 text-white text-xs font-bold">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    {data.rating}
                </div>
            </div>
            <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <h4 className="font-bold text-lg leading-tight mb-1">{data.name}</h4>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                            <MapPin className="w-3 h-3" />
                            {data.location}
                        </div>
                    </div>
                    <span className="font-bold text-blue-500">{data.price}</span>
                </div>
                <button className="w-full mt-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-black/5 dark:border-white/10 transition-colors text-sm font-medium flex items-center justify-center gap-2">
                    View Details
                    <ExternalLink className="w-3 h-3" />
                </button>
            </div>
        </GlassCard>
    );
};
