// Mock Data Service
// Phase 1: Local JSON Logic
// Phase 2: Switch to fetch('http://localhost:8000/api/...')

const DESTINATIONS = [
    {
        id: 1,
        name: "Kyoto, Japan",
        subtitle: "Cultural Immersion & Food",
        description: "Explore ancient temples, geisha districts, and seasonal kaiseki dining.",
        tags: ["Culture", "Food", "History"],
        cost_tier: "Mid", // Low, Mid, High, Luxury
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1000",
        rating: 4.8,
        coordinates: [35.0116, 135.7681],
        day_plan: [
            { time: "09:00", activity: "Arrive at KIX Airport", type: "transport" },
            { time: "11:00", activity: "Check-in at The Thousand Kyoto", type: "hotel" },
            { time: "13:00", activity: "Walking Tour of Gion District", type: "activity" },
            { time: "19:00", activity: "Dinner at Pontocho Alley", type: "dining" }
        ]
    },
    {
        id: 2,
        name: "Bali, Indonesia",
        subtitle: "Spiritual Retreat",
        description: "Yoga, meditation, and rice terraces in the heart of Ubud.",
        tags: ["Spiritual", "Nature", "Relax"],
        cost_tier: "Low",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1000",
        rating: 4.7,
        coordinates: [-8.5069, 115.2625],
        day_plan: [
            { time: "08:00", activity: "Morning Yoga at Yoga Barn", type: "activity" },
            { time: "10:00", activity: "Monkey Forest Visit", type: "activity" },
            { time: "13:00", activity: "Organic Lunch at Kafe", type: "dining" }
        ]
    },
    {
        id: 3,
        name: "Swiss Alps",
        subtitle: "Hiking Adventure",
        description: "Breathtaking views and challenging trails for outdoor enthusiasts.",
        tags: ["Adventure", "Nature", "Luxury"],
        cost_tier: "High",
        image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&q=80&w=1000",
        rating: 4.9,
        coordinates: [46.8182, 8.2275],
        day_plan: []
    }
];

export const generateItinerary = async (preferences) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));

    // Mock Filtering Logic (Smart Engine)
    const filtered = DESTINATIONS.filter(dest => {
        if (preferences.budget && dest.cost_tier !== preferences.budget) return false;
        // Add more filters here
        return true;
    });

    // Fallback if no matches
    return filtered.length > 0 ? filtered : DESTINATIONS;
};

export const getDestinations = async () => {
    return DESTINATIONS;
}
