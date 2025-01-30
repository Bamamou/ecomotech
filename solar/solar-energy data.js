
// data.js
const products = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    name: `Solar Panel Model SP-${1000 + i}`,
    price: `$${(299 + i * 50).toLocaleString()}`,
    power: 400 + i * 10,
    efficiency: (20 + i * 0.1).toFixed(1),
    warranty: "25 Years",
    dimensions: "1956 x 992 x 40mm",
    weight: "22.5 kg",
    description: `High-efficiency monocrystalline solar panel with advanced cell technology. Perfect for both residential and commercial installations. Features anti-reflective coating and robust aluminum frame for enhanced durability and performance.`,
    images: [
        `/api/placeholder/400/300`,
        `/api/placeholder/400/300`,
        `/api/placeholder/400/300`,
        `/api/placeholder/400/300`
    ]
}));