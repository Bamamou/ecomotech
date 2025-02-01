// data.js
const products = [
    {
        id: 1,
        name: "Evoke 6061",
        price: "$8000",
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
        mainImage: "img/6061.jpg", // Replace with: "img/sp1000-main.jpg"
        images: [
            "/api/placeholder/400/300", // Replace with: "img/sp1000-main.jpg"
            "/api/placeholder/400/300", // Replace with: "img/sp1000-angle.jpg"
            "/api/placeholder/400/300", // Replace with: "img/sp1000-detail.jpg"
            "/api/placeholder/400/300"  // Replace with: "img/sp1000-install.jpg"
        ]
    },
    {
        id: 2,
        name: "Tian Niu",
        price: "$1500",
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
        mainImage: "img/tianniu.jpg", // Replace with: "img/sp1000-main.jpg"
        images: [
            "img/tianniu red.jpg", // Replace with: "img/sp1001-main.jpg"
            "img/Kianing.jpg", // Replace with: "img/sp1001-bifacial.jpg"
            "img/tianiu yellow.avif", // Replace with: "img/sp1001-structure.jpg"
            "img/tianniu green.avif" // Replace with: "img/sp1001-performance.jpg"
        ]
    },
    {
        id: 3,
        name: "EcoMoTech",
        price: "$1300",
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
        mainImage: "img/open.jpg", // Replace with: "img/sp1000-main.jpg"
        images: [
            "img/openframe.avif", // Replace with: "img/sp1002-main.jpg"
            "img/open frame.avif", // Replace with: "img/sp1002-tech.jpg"
            "img/open frame red.avif", // Replace with: "img/sp1002-close.jpg"
            "img/open frame blue.webp",  // Replace with: "img/sp1002-temp.jpg"
        ]
    },

    {
        id: 4,
        name: "EcoMoTech X1",
        price: "$1200",
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
        mainImage: "img/KingChe red.jpg", // Replace with: "img/sp1000-main.jpg"
        images: [
            "img/QingChe red.jpg", // Replace with: "img/sp1002-main.jpg"
            "img/KingChe black.webp", // Replace with: "img/sp1002-tech.jpg"
            "img/KingChe blue.png",  // Replace with: "img/sp1002-close.jpg"
            "img/tianniu white.webp",  // Replace with: "img/sp1002-temp.jpg"
        ]
    },

    {
        id: 5,
        name: "EcoMoTech Y1",
        price: "$1200",
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
        mainImage: "img/small open.avif", // Replace with: "img/sp1000-main.jpg"
        images: [
            "img/small open.avif", // Replace with: "img/sp1002-main.jpg"
            "img/small open black.webp", // Replace with: "img/sp1002-tech.jpg"
            "img/small open blueblack.webp",  // Replace with: "img/sp1002-close.jpg"
            "img/small open red.avif",  // Replace with: "img/sp1002-temp.jpg"
        ]
    },
    {
        id: 6,
        name: "EcoMoTech Z1",
        price: "$1800",
        power: 1000,
        efficiency: 98,
        warranty: "3 Years",
        dimensions: "2100 x 1050 x 40mm",
        weight: "198.5 kg",
        description: `Ultra-premium heterojunction solar panel with industry-leading efficiency. 
        Features advanced temperature coefficient for superior performance in hot climates. 
        Ideal for limited-space installations where maximum power density is required. Features:
        • Heterojunction cell technology
        • Best-in-class temperature coefficient
        • Ultra-high power density
        • Enhanced shade tolerance
        • Integrated optimization`,
        mainImage: "img/alrendo.jpg", // Replace with: "img/sp1000-main.jpg"
        images: [
            "img/alrendo-ts-bravo-640.jpg", // Replace with: "img/sp1002-main.jpg"
            "img/Strom-Thailand-e-motorcycle.webp", // Replace with: "img/sp1002-tech.jpg"
            "img/alrendo ride.avif",  // Replace with: "img/sp1002-close.jpg"
            "img/alrendo green.webp",  // Replace with: "img/sp1002-temp.jpg"
        ]
    }
    // ... You can continue adding more products with unique descriptions and images
];