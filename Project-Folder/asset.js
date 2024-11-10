// Define an array of financial assets

export const assets = [
    {
        id: 1,
        name: "Apple Inc.",
        type: "stock",
        price: 120.00,
        quantity: 5,
        lastUpdated: new Date()
    },
    {
        id: 2,
        name: "Microsoft Corp.",
        type: "stock",
        price: 180.00,
        quantity: 6,
        lastUpdated: new Date()
    },
    {
        id: 3,
        name: "Tesla Inc.",
        type: "stock",
        price: 250.00,
        quantity: 4,
        lastUpdated: new Date()
    },
    {
        id: 4,
        name: "Amazon.com Inc.",
        type: "stock",
        price: 200.00,
        quantity: 2,
        lastUpdated: new Date()
    }
];

export function getAssetById(id) {
    return assets.find(asset => asset.id === id);       
};