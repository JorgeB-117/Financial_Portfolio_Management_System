// Task 2: Create the Portfolio Module

import { assets } from './asset.js';

// Total Value of the Portfolio

export function calculatePortfolioValue() {
    return assets.reduce((total, asset) => {
        return total + (asset.price * asset.quantity);
    }, 0).toFixed(2);
};

// Portfolio Allocation by Percentage

export function getPortfolioAllocation() {
    const totalValue = calculatePortfolioValue();
    return assets.map(asset => {
        const assetValue = asset.price * asset.quantity;
        const allocation = (assetValue / totalValue) * 100;
        return{
            ...asset,
            allocation: allocation.toFixed(2)
        };
    });
}
console.log(`Total Portfolio Value: $${calculatePortfolioValue()}`);
console.log('Portfolio Allocation:', getPortfolioAllocation());
