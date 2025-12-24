// ... existing interfaces ...

export const mockExoticTrip = {
    meta: {
        destination: "Bali, Indonesia",
        image: "/CardsandBanner/3.jpg",
        duration: "5 Days",
        travelers: "2 Adults",
        dates: "May 10 - May 15, 2025",
        totalBudget: 3500,
        currency: "USD",
        description: "Immerse yourself in the Island of Gods. From the spiritual vortex of Ubud to the cliffside temples of Uluwatu, this journey balances serenity with adventure. Expect lush rice terraces, sacred ceremonies, and pristine beaches."
    },
    budgetBreakdown: [
        { name: 'Flights', value: 1200, color: '#3b82f6' },
        { name: 'Hotels', value: 1000, color: '#8b5cf6' },
        { name: 'Activities', value: 600, color: '#10b981' },
        { name: 'Food', value: 500, color: '#f59e0b' },
        { name: 'Misc', value: 200, color: '#ef4444' },
    ],
    itinerary: [
        {
            day: 1,
            title: "Arrival & The Cliffs of Uluwatu",
            summary: "Touch down in paradise and head straight for the dramatic southern cliffs. Witness a sunset that sets the sky on fire.",
            activities: [
                { time: "14:00", title: "Check-in at Resort", desc: "Welcome drink and relaxation at your cliffside villa.", type: "Logistics" },
                { time: "16:30", title: "Uluwatu Temple", desc: "Perched 70 meters above the sea, this ancient temple protects the island from evil spirits.", type: "Sightseeing" },
                { time: "18:00", title: "Kecak Fire Dance", desc: "A hypnotic traditional dance performing the Ramayana epic as the sun dips below the Indian Ocean.", type: "Culture" },
                { time: "20:00", title: "Seafood Dinner at Jimbaran", desc: "Feast on freshly grilled snapper and prawns right on the sandy beach under the stars.", type: "Food" }
            ]
        },
        {
            day: 2,
            title: "Spiritual Ubud & lush Greenery",
            summary: "Journey into the cultural heart of Bali. Art, monkeys, and emerald green terraces await.",
            activities: [
                { time: "09:00", title: "Sacred Monkey Forest", desc: "Walk among ancient banyan trees and over 1000 playful long-tailed macaques.", type: "Nature" },
                { time: "11:30", title: "Tegalalang Rice Terrace", desc: "Capture the iconic photo of Bali's complex subak irrigation system.", type: "Nature" },
                { time: "13:00", title: "Organic Jungle Lunch", desc: "Farm-to-table dining overlooking the rainforest valley.", type: "Food" },
                { time: "15:00", title: "Tirta Empul Temple", desc: "Participate in a 'Melukat' purification ritual in the holy mountain spring water.", type: "Culture" }
            ]
        },
        {
            day: 3,
            title: "Nusa Penida Island Adventure",
            summary: "A thrilling speedboat ride takes you to the raw, rugged beauty of Nusa Penida.",
            activities: [
                { time: "07:30", title: "Speedboat to Nusa Penida", desc: "A scenic 45-minute ride across the Bali Strait.", type: "Logistics" },
                { time: "10:00", title: "Kelingking Beach", desc: "The T-Rex shaped cliff offering the most spectacular coastal view in Indonesia.", type: "Sightseeing" },
                { time: "13:00", title: "Angel’s Billabong", desc: "Swim in a crystal clear natural infinity pool framed by sharp volcanic rock.", type: "Nature" },
                { time: "16:30", title: "Return to Bali", desc: "Head back to the mainland for a relaxing evening spa session.", type: "Logistics" }
            ]
        }
    ],
    facts: [
        { title: "The World's Priciest Coffee", desc: "Kopi Luwak is produced here. The beans are eaten and digested by the Asian palm civet, giving the coffee a uniquely smooth flavor profile.", image: "/CardsandBanner/7.jpg" },
        { title: "Day of Silence", desc: "During 'Nyepi', the entire island shuts down for 24 hours. No flights, no electricity, no noise. It's a profound day of self-reflection.", image: "/CardsandBanner/8.jpg" },
        { title: "Tri Hita Karana", desc: "The Balinese philosophy of life: harmony with God, harmony with people, and harmony with nature.", image: "/CardsandBanner/2.jpg" } // existing image reuse
    ],
    flights: [
        { airline: "Singapore Airlines", time: "08:45 AM - 03:20 PM", duration: "6h 35m", price: "$600", type: "Premium Economy", logo: "SQ", desc: "Award-winning service with layover in Changi." },
        { airline: "Qatar Airways", time: "10:15 AM - 05:30 PM", duration: "7h 15m", price: "$550", type: "Standard", logo: "QR", desc: "Best value for long-haul comfort." }
    ],
    hotels: [
        { name: "The Kayon Jungle Resort", rating: 5.0, price: "$350/night", image: "/CardsandBanner/3.jpg", location: "Ubud, Bali", desc: "Famous for its three-tiered infinity pool inspired by the Tegalalang Rice Terraces." },
        { name: "Ayana Resort", rating: 4.8, price: "$420/night", image: "/CardsandBanner/2.jpg", location: "Jimbaran, Bali", desc: "Home to the iconic Rock Bar, perched on natural rocks 14 meters above the Indian Ocean." }
    ],
    topActivities: [
        {
            id: 1,
            title: "Uluwatu Temple Sunset",
            image: "/CardsandBanner/1.jpg",
            price: "$30",
            duration: "3 Hours",
            rating: 4.9,
            desc: "Watch the epic Kecak Fire Dance as the sun sets over the Indian Ocean cliffs."
        },
        {
            id: 2,
            title: "Tegalalang Rice Terrace Swing",
            image: "/CardsandBanner/3.jpg",
            price: "$15",
            duration: "2 Hours",
            rating: 4.7,
            desc: "Swing over the lush green rice paddies for the most instagrammable shot in Bali."
        },
        {
            id: 3,
            title: "Sacred Monkey Forest",
            image: "/CardsandBanner/4.jpg",
            price: "$10",
            duration: "2 Hours",
            rating: 4.5,
            desc: "Explore the ancient sanctuary home to hundreds of grey long-tailed macaques."
        },
        {
            id: 4,
            title: "Nusa Penida Boat Trip",
            image: "/CardsandBanner/2.jpg",
            price: "$85",
            duration: "Full Day",
            rating: 4.8,
            desc: "Cruise to the incredible Kelingking Beach and snorkel with manta rays."
        }
    ]
};

export interface Destination {
    id: number;
    title: string;
    location: string;
    image: string;
    price: string;
    rating: number;
    description: string;
}

export const suggestions: Destination[] = [
    {
        id: 1,
        title: "Kyoto, Japan",
        location: "Japan",
        image: "/CardsandBanner/1.jpg",
        price: "$2,400",
        rating: 4.8,
        description: "Experience the ancient temples, traditional tea ceremonies, and stunning cherry blossoms of Japan's cultural capital."
    },
    {
        id: 2,
        title: "Santorini, Greece",
        location: "Greece",
        image: "/CardsandBanner/2.jpg",
        price: "$3,200",
        rating: 4.9,
        description: "Watch famous sunsets over blue-domed churches and white-washed buildings in this romantic island paradise."
    },
    {
        id: 3,
        title: "Bali, Indonesia",
        location: "Indonesia",
        image: "/CardsandBanner/3.jpg",
        price: "$1,800",
        rating: 4.7,
        description: "Find your zen in lush rice terraces, sacred monkey forests, and pristine beaches."
    },
    {
        id: 4,
        title: "Swiss Alps",
        location: "Switzerland",
        image: "/CardsandBanner/4.jpg",
        price: "$4,500",
        rating: 5.0,
        description: "Ski through powdery slopes and enjoy cozy chalets in the breathtaking mountain ranges."
    },
    {
        id: 5,
        title: "Marrakech, Morocco",
        location: "Morocco",
        image: "/CardsandBanner/5.jpg",
        price: "$1,500",
        rating: 4.6,
        description: "Get lost in the vibrant souks, intricate palaces, and sensory overload of the Red City."
    },
    {
        id: 6,
        title: "New York, USA",
        location: "USA",
        image: "/CardsandBanner/6.jpg",
        price: "$3,000",
        rating: 4.8,
        description: "The city that never sleeps offers world-class dining, theater, and iconic landmarks at every turn."
    },
];
