import { FeaturedGallery } from '../components/FeaturedGallery';
import { Footer } from '../components/Footer';

export const Gallery = () => {
    return (
        <div className="min-h-screen pt-24 pb-0">
            <div className="px-4 mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
                    Captured Moments
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    A visual journey through the incredible experiences our users have shared.
                </p>
            </div>

            <FeaturedGallery />

            <Footer />
        </div>
    );
};
