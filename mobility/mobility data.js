// data.js
const products = [
    {
        id: 1,
        name: "EcoMoTech V9", /* V9 */
        price: "$1999",
        Motor_power: 3000,
        Max_Speed: 90,
        Battery: "72V50Ah",
        Range: "130km",
        Controller: "Votol EM150",
        description: `<strong> EcoMoTech V9 </strong> merges power and innovation in a lightweight design, 
        ideal for urban and off-road adventures. 
        Its 72V lithium-ion battery (50Ah) and 3kW brushless motor deliver a 70-85 mile (130km) range, 
        while dual hydraulic disc brakes with regenerative braking boost safety and efficiency. 
        It comes with a 7" GPS touchscreen, customizable ride modes, and over-the-air software updates. 
        Safety is ensured via ABS and traction control, 
        and eco-friendly design highlights zero emissions and a recyclable battery. 
        Backed by a 3-year warranty and 24/7 roadside assistance, 
        it's built for performance, tech, and sustainability.<br><br>
        <strong>Features: </strong>
        • dual hydraulic disc brakes with ABS, TCS, and regenerative braking
        • Keyless NFC/fingerprint ignition
        • Smart connectivity with 7" touchscreen and GPS
        • anti-theft tracking and OTA
        • IP67 weatherproofing
        • crash alert system and emergency contact notification`,
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
        name: "EcoMo_T1",
        price: "$1350",
        Motor_power: 3000,
        Max_Speed: 80,
        Battery: "72V40Ah",
        Range: "120km",
        Controller: "APT",
        description: `<b> EcoMo_T1 </b> revolutionizes riding with a lightweight design, 
        powered by a 72V/35Ah lithium-ion battery and 3kW brushless motor for a 70-75-mile (120km) range.  
        customizable ride modes, and over-the-air updates ensure smart connectivity. 
        ABS, traction control, and an eco-conscious recyclable battery prioritize safety and sustainability, backed by a 3-year warranty and 24/7 roadside assistance. <br><br>
        <strong>Features: </strong>
        • crash alert system and emergency contact notification
        • Keyless NFC/fingerprint ignition/FOB
        • 7" GPS touchscreen
        • anti-theft tracking and OTA
        • Mobile app connectivity
        • IP67 weatherproofing`,
        mainImage: "img/tianniu.jpg", // Replace with: "img/sp1000-main.jpg"
        images: [
            "img/tianniu red.jpg", // Replace with: "img/sp1001-main.jpg"
            "img/tianniu red new.avif", // Replace with: "img/sp1001-bifacial.jpg"
            "img/tianiu yellow.avif", // Replace with: "img/sp1001-structure.jpg"
            "img/tianniu green.avif" // Replace with: "img/sp1001-performance.jpg"
        ]
    },
    {
        id: 3,
        name: "EcoMoTech_M1", /* V6 */
        price: "$1199",
        Motor_power: 3000,
        Max_Speed: 90,
        Battery: "72V35Ah",
        Range: "80km",
        Controller: "Votol EM150",
        description: `<b> EcoMoTech_M1 </b> is a lightweight, tech-driven marvel for urban and off-road adventures, 
        powered by a 72V lithium-ion battery (35Ah) and 3kW brushless motor, offering a 45-50-mile (80km) range. 
        Dual hydraulic disc brakes with regenerative braking boost safety and efficiency, while a 7" GPS touchscreen, customizable ride modes, and over-the-air updates ensure cutting-edge connectivity. 
        Safety features include ABS and traction control, complemented by eco-conscious zero-emissions design and a recyclable battery. 
        Backed by a 3-year warranty and 24/7 roadside assistance, it blends performance, innovation, and sustainability. <br><br>
        <strong>Features: </strong>
        • crash alert system and emergency contact notification
        • Keyless NFC/fingerprint ignition/FOB
        • 7" GPS touchscreen
        • anti-theft tracking and OTA
        • Mobile app connectivity
        • Adaptive LED lighting`,
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
    },
    {
        id: 7,
        name: "EcoMoTech H1", /* King Che Mert*/
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
        mainImage: "img/higo1.webp", // Replace with: "img/sp1000-main.jpg"
        images: [
            "img/higo_side.webp", // Replace with: "img/sp1002-main.jpg"
            "img/higo_side.webp", // Replace with: "img/sp1002-tech.jpg"
            "img/higo1.webp",  // Replace with: "img/sp1002-close.jpg"
            "img/higo_profile.webp",  // Replace with: "img/sp1002-temp.jpg"
        ]
    }
    // ... You can continue adding more products with unique descriptions and images
];