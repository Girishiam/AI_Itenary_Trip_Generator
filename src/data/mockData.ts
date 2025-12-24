export interface Activity {
    id: string;
    time: string;
    title: string;
    description: string;
    location: {
        lat: number;
        lng: number;
        address: string;
    };
    cost: number;
    tags: string[];
}

export interface DayPlan {
    day: number;
    date: string;
    summary: string;
    activities: Activity[];
}

export interface Itinerary {
    id: string;
    destination: string;
    totalCost: number;
    duration: string;
    days: DayPlan[];
}

export const mockItinerary: Itinerary = {
    id: "itinerary-001",
    destination: "Kyoto, Japan",
    totalCost: 2450,
    duration: "5 Days",
    days: [
        {
            day: 1,
            date: "2024-04-10",
            summary: "Arrival and Historic Higashiyama",
            activities: [
                {
                    id: "act-1-1",
                    time: "10:00 AM",
                    title: "Arrival at Kyoto Station",
                    description: "Check into the Ryokan and drop off luggage.",
                    location: { lat: 34.9858, lng: 135.7588, address: "Kyoto Station, Shimogyo Ward" },
                    cost: 0,
                    tags: ["Travel", "Logistics"],
                },
                {
                    id: "act-1-2",
                    time: "01:00 PM",
                    title: "Kiyomizu-dera Temple",
                    description: "Iconic wooden temple with panoramic views of the city.",
                    location: { lat: 34.9949, lng: 135.7850, address: "294 Kiyomizu, Higashiyama Ward" },
                    cost: 4,
                    tags: ["History", "Culture", "Must-See"],
                },
                {
                    id: "act-1-3",
                    time: "06:00 PM",
                    title: "Gion District Evening Walk",
                    description: "Spot Geishas and enjoy the traditional wooden machiya houses.",
                    location: { lat: 35.0037, lng: 135.7778, address: "Gion, Higashiyama Ward" },
                    cost: 0,
                    tags: ["Culture", "Nightlife"],
                },
            ],
        },
        {
            day: 2,
            date: "2024-04-11",
            summary: "Arashiyama Bamboo Grove & Tenryu-ji",
            activities: [
                {
                    id: "act-2-1",
                    time: "08:00 AM",
                    title: "Arashiyama Bamboo Grove",
                    description: "Walk through the soaring bamboo stalks.",
                    location: { lat: 35.0094, lng: 135.6668, address: "Arashiyama, Ukyo Ward" },
                    cost: 0,
                    tags: ["Nature", "Photography"],
                },
                {
                    id: "act-2-2",
                    time: "11:00 AM",
                    title: "Tenryu-ji Temple",
                    description: "Zen temple with a magnificent garden.",
                    location: { lat: 35.0157, lng: 135.6737, address: "68 Susukinobaba-cho, Saga-Tenryuji" },
                    cost: 5,
                    tags: ["History", "Garden"],
                },
            ],
        },
        // Add more days as needed
    ],
};
