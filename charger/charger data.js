// data.js
const products = [
    {
        id: 1,
        name: "ECharge1DC66K.jpg",
        price: "$499",
        power: 6600,
        efficiency: 93.0,
        warranty: "15 Years",
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
        mainImage: "img/6kw charger.jpg", // Replace with: "img/sp1000-main.jpg"
        images: [
            "img/charger.jpg", // Replace with: "img/sp1000-main.jpg"
            "img/EV charger.jpg", // Replace with: "img/sp1000-angle.jpg"
            "img/EV charger solution.jpg", // Replace with: "img/sp1000-detail.jpg"
            "img/6kw charger.jpg"  // Replace with: "img/sp1000-install.jpg"
        ]
    },
    
    {
        id: 2,
        name: "Ecomocharge",
        price: "$188",
        power: 7000,
        efficiency: 22.1,
        warranty: "10 Years",
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
        mainImage: "img/EcomochargeCC1732CQ.png", // Replace with: "img/sp1000-main.jpg"
        images: [
            "img/EcomochargeC1732Q.png", // Replace with: "img/sp1002-main.jpg"
            "img/EcomochargeCC1732Q.png", // Replace with: "img/sp1002-tech.jpg"
            "img/EcomochargeCC1732CQ.png", // Replace with: "img/sp1002-main.jpg"
            "img/EcomochargeC1732Q.png", // Replace with: "img/sp1002-tech.jpg"
        ]
    },
    {
        id: 3,
        name: "EcomotechCharge",
        price: "$66",
        power: 7000,
        efficiency: 22.1,
        warranty: "10 Years",
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
        mainImage: "img/EcomotechChargeC1732CP.png", // Replace with: "img/sp1000-main.jpg"
        images: [
            "img/EcomotechChargeCC1732CP.png", // Replace with: "img/sp1002-main.jpg"
            "img/EcomotechchargeAC1732.png", // Replace with: "img/sp1002-tech.jpg"
            "img/EcomotechchargeAC.png", // Replace with: "img/sp1002-main.jpg"
            "img/EcomotechChargeCC1732CP.png", // Replace with: "img/sp1002-tech.jpg"
        ]
    },
    {
        id: 4,
        name: "EchargeAC",
        price: "$444",
        power: 32000,
        efficiency: 98,
        warranty: "10 Years",
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
        mainImage: "img/EchargeCC1732BCQ.png", // Replace with: "img/sp1000-main.jpg"
        images: [
            "img/EchargeC1732BCQ.png", // Replace with: "img/sp1002-main.jpg"
            "img/EchargeCC1732BCQ.png", // Replace with: "img/sp1002-tech.jpg"
            "img/EchargeC1732BC.png", // Replace with: "img/sp1002-main.jpg"
            "img/EchargeC1732BCQ.png", // Replace with: "img/sp1002-tech.jpg"
        ]
    },
    {
        id: 5,
        name: "EcoChargePu",
        price: "$49",
        power: 7000,
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
        mainImage: "img/EcoChargeCC1732Pu.png", // Replace with: "img/sp1000-main.jpg"
        images: [
            "img/EcochargeCC.jpg", // Replace with: "img/sp1001-main.jpg"
            "img/EcoChargeC1732Pu.png", // Replace with: "img/sp1001-bifacial.jpg"
            "img/EcoChargeCC1732Pu.png", // Replace with: "img/sp1001-structure.jpg"
            "img/EcoChargeC1732Pu.png"  // Replace with: "img/sp1001-performance.jpg"
        ]
    },
    {
        id: 6,
        name: "EcoNECharge",
        price: "$66",
        power: 7000,
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
        mainImage: "img/EcoNEC1732AC.jpg", // Replace with: "img/sp1000-main.jpg"
        images: [
            "img/EcoNEC1732AC1.jpg", // Replace with: "img/sp1002-main.jpg"
            "img/EcoNEC1732AC2.jpg", // Replace with: "img/sp1002-tech.jpg"
            "img/EcoNEC1732AC3.jpg", // Replace with: "img/sp1002-main.jpg"
            "img/EcoNEC1732AC4.jpg", // Replace with: "img/sp1002-tech.jpg"
        ]
    },
    {
        id: 7,
        name: "EcoChargeC",
        price: "$66",
        power: 7000,
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
        mainImage: "img/EcoChargeCC1732P.png", // Replace with: "img/sp1000-main.jpg"
        images: [
            "img/EcochargeCC.jpg", // Replace with: "img/sp1002-main.jpg"
            "img/EcoChargeC1732P.png", // Replace with: "img/sp1002-tech.jpg"
            "img/EcoChargeCC1732P.png", // Replace with: "img/sp1002-main.jpg"
            "img/EcoChargeC1732P.png", // Replace with: "img/sp1002-tech.jpg"
        ]
    },

    {
        id: 8,
        name: "EcoChargeCP",
        price: "$77",
        power: 7000,
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
        mainImage: "img/EcoChargeCC1732CP.jpg", // Replace with: "img/sp1000-main.jpg"
        images: [
            "img/EcochargeCC.jpg", // Replace with: "img/sp1002-main.jpg"
            "img/EcoChargeC1732CP.png", // Replace with: "img/sp1002-tech.jpg"
            "img/EcoChargeCC1732CP.jpg", // Replace with: "img/sp1002-main.jpg"
            "img/EcoChargeC1732CP.png", // Replace with: "img/sp1002-tech.jpg"
        ]
    },

    {
        id: 9,
        name: "EcoChargeCPQ",
        price: "$88",
        power: 7000,
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
        mainImage: "img/EcoChargeCC1732P.png", // Replace with: "img/sp1000-main.jpg"
        images: [
            "img/EcochargeCC.jpg", // Replace with: "img/sp1002-main.jpg"
            "img/EcoChargeC1732CPQ.png", // Replace with: "img/sp1002-tech.jpg"
            "img/EcoChargeCC1732CPQ.png", // Replace with: "img/sp1002-main.jpg"
            "img/EcoChargeC1732CPQ.png", // Replace with: "img/sp1002-tech.jpg"
        ]
    },

    {
        id: 10,
        name: "EcoCharge2P",
        price: "$125",
        power: 14000,
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
        mainImage: "img/EcoChargeCC2732P.png", // Replace with: "img/sp1000-main.jpg"
        images: [
            "img/EcochargeCC.jpg", // Replace with: "img/sp1002-main.jpg"
            "img/EcoChargeC2732P.png", // Replace with: "img/sp1002-tech.jpg"
            "img/EcoChargeCC2732P.png", // Replace with: "img/sp1002-main.jpg"
            "img/EcoChargeC2732P.png", // Replace with: "img/sp1002-tech.jpg"
        ]
    },
    
    {
        id: 11,
        name: "EcoCharge2Pu",
        price: "$133",
        power: 14000,
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
        mainImage: "img/EcoChargeCC2732P.png", // Replace with: "img/sp1000-main.jpg"
        images: [
            "img/EcochargeCC.jpg", // Replace with: "img/sp1002-main.jpg"
            "img/EcoChargeC2732P.png", // Replace with: "img/sp1002-tech.jpg"
            "img/EcoChargeCC2732P.png", // Replace with: "img/sp1002-main.jpg"
            "img/EcoChargeC2732P.png", // Replace with: "img/sp1002-tech.jpg"
        ]
    },

    {
        id: 12,
        name: "EcoCharge2CP",
        price: "$144",
        power: 14000,
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
        mainImage: "img/EcoChargeCC2732CP.png", // Replace with: "img/sp1000-main.jpg"
        images: [
            "img/EcochargeCC.jpg", // Replace with: "img/sp1002-main.jpg"
            "img/EcoChargeC2732CP.png", // Replace with: "img/sp1002-tech.jpg"
            "img/EcoChargeCC2732CP.png", // Replace with: "img/sp1002-main.jpg"
            "img/EcoChargeC2732CP.png", // Replace with: "img/sp1002-tech.jpg"
        ]
    },

    {
        id: 13,
        name: "EcoCharge2CPQ",
        price: "$166",
        power: 14000,
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
        mainImage: "img/EcoChargeCC2732CPQ.png", // Replace with: "img/sp1000-main.jpg"
        images: [
            "img/EcochargeCC.jpg", // Replace with: "img/sp1002-main.jpg"
            "img/EcoChargeC2732CPQ.png", // Replace with: "img/sp1002-tech.jpg"
            "img/EcoChargeCC2732CPQ.png", // Replace with: "img/sp1002-main.jpg"
            "img/EcoChargeC2732CPQ.png", // Replace with: "img/sp1002-tech.jpg"
        ]
    },

    // ... You can continue adding more products with unique descriptions and images
];