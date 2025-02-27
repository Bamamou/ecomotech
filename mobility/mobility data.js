// data.js
const products = [
    {
        id: 1,
        name: "EcoMoTech V9", /* V9 */
        price: "$1999",
        Motor_power: 3000,
        Max_Speed: 90,
        Battery: "72V60Ah",
        Range: "130km",
        Controller: "Votol EM150",
        description: `Premium monocrystalline solar panel featuring PERC cell technology. 
        This high-efficiency panel delivers exceptional performance in low-light conditions. 
        The anti-reflective glass coating and robust aluminum frame ensure maximum durability. 
        Perfect for residential rooftop installations. Features:
        • Advanced PERC technology
        • Anti-reflective coating
        • Salt mist and ammonia resistance
        • PID resistance
        • Compatible with most inverter systems`,
        mainImage: "img/V9 Bleu.png", // Replace with: "img/sp1000-main.jpg"
        images: [
            "img/V9 yellow Black.jpg", // Replace with: "img/sp1000-main.jpg"
            "img/V9 yellow.png", // Replace with: "img/sp1000-angle.jpg"
            "img/V9 Black.png", // Replace with: "img/sp1000-detail.jpg"
            "img/V9 white.png"  // Replace with: "img/sp1000-install.jpg"
        ]
    },
    {
        id: 2,
        name: "Tian Niu",
        price: "$1350",
        Motor_power: 400,
        Max_Speed: 20.0,
        Battery: "25 Years",
        Range: "1956 x 992 x 40mm",
        Controller: "22.5 kg",
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
        name: "EcoMoTech", /* V6 */
        price: "$1199",
        Motor_power: 3000,
        Max_Speed: 90,
        Battery: "72V35Ah",
        Range: "80km",
        Controller: "Votol EM150",
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
        name: "EcoMoTech X1",  /* KingChe*/
        price: "$1350",
        Motor_power: 3000,
        Max_Speed: 90,
        Battery: "72V32Ah",
        Range: "50km",
        Controller: "Votol EM150",
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
        name: "EcoMoTech Y1", /* V8 */
        price: "$1999",
        Motor_power: 3000,
        Max_Speed: 90,
        Battery: "72V60Ah",
        Range: "130km",
        Controller: "Votol EM150",
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
        name: "EcoMoTech Z1", /* King Che Mert*/
        price: "$2499",
        Motor_power: 400,
        Max_Speed: 130,
        Battery: "72V70Ah",
        Range: "150km",
        Controller: "Fardriver/ Votol EM150",
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