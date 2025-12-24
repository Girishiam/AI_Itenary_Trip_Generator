import { TravelForm } from '../components/TravelForm';
import { Footer } from '../components/Footer';

export const GenerateItinerary = () => {
    return (
        <div className="relative min-h-screen pt-32">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
                        Design Your Dream Trip
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Tell us your preferences and let our AI craft the perfect itinerary for you.
                    </p>
                </div>
                <TravelForm className="mt-0" />
            </div>
            <Footer />
        </div>
    );
};
