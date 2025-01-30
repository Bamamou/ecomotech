// data.js
const products = [
    {
        id: 1,
        name: "Solar Panel Model SP-1000",
        price: "$299",
        power: 400,
        efficiency: 20.0,
        warranty: "25 Years",
        dimensions: "1956 x 992 x 40mm",
        weight: "22.5 kg",
        description: `Premium monocrystalline solar panel featuring PERC cell technology. 
        This high-efficiency panel delivers exceptional performance in low-light conditions. 
        The anti-reflective glass coating and robust aluminum frame ensure maximum durability. 
        Perfect for residential rooftop installations. Features:
        • Advanced PERC technology
        • Anti-reflective coating
        • Salt mist and ammonia resistance
        • PID resistance
        • Compatible with most inverter systems`,
        mainImage: "img/BESS bat.avif", // Replace with: "img/sp1000-main.jpg"
        images: [
            "/api/placeholder/400/300", // Replace with: "img/sp1000-main.jpg"
            "/api/placeholder/400/300", // Replace with: "img/sp1000-angle.jpg"
            "/api/placeholder/400/300", // Replace with: "img/sp1000-detail.jpg"
            "/api/placeholder/400/300"  // Replace with: "img/sp1000-install.jpg"
        ]
    },
    {
        id: 2,
        name: "Solar Panel Model SP-1001",
        price: "$349",
        power: 450,
        efficiency: 21.3,
        warranty: "25 Years",
        dimensions: "2008 x 1002 x 40mm",
        weight: "23.5 kg",
        description: `High-power bifacial solar panel with transparent back sheet. 
        Captures both direct and reflected sunlight for up to 30% higher energy yield. 
        Ideal for ground-mounted installations and carports. Features:
        • Bifacial cell technology
        • Double-glass construction
        • Enhanced weak light performance
        • Extreme weather resistance
        • Optimized for large-scale installations`,
        mainImage: "img/battery system.webp", // Replace with: "img/sp1000-main.jpg"
        images: [
            "img/10S2P.png", // Replace with: "img/sp1001-main.jpg"
            "/api/placeholder/400/300", // Replace with: "img/sp1001-bifacial.jpg"
            "/api/placeholder/400/300", // Replace with: "img/sp1001-structure.jpg"
            "img/BESS bat.avif"  // Replace with: "img/sp1001-performance.jpg"
        ]
    },
    {
        id: 3,
        name: "Solar Panel Model SP-1002",
        price: "$399",
        power: 500,
        efficiency: 22.1,
        warranty: "30 Years",
        dimensions: "2100 x 1050 x 40mm",
        weight: "24.5 kg",
        description: `Ultra-premium heterojunction solar panel with industry-leading efficiency. 
        Features advanced temperature coefficient for superior performance in hot climates. 
        Ideal for limited-space installations where maximum power density is required. Features:
        • Heterojunction cell technology
        • Best-in-class temperature coefficient
        • Ultra-high power density
        • Enhanced shade tolerance
        • Integrated optimization`,
        mainImage: "img/sp1000-main.png", // Replace with: "img/sp1000-main.jpg"
        images: [
            "/api/placeholder/400/300", // Replace with: "img/sp1002-main.jpg"
            "/api/placeholder/400/300", // Replace with: "img/sp1002-tech.jpg"
            "/api/placeholder/400/300", // Replace with: "img/sp1002-close.jpg"
            "/api/placeholder/400/300"  // Replace with: "img/sp1002-temp.jpg"
        ]
    }
    // ... You can continue adding more products with unique descriptions and images
];