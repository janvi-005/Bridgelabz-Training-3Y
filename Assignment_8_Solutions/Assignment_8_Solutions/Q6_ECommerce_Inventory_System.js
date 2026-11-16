// Q6. E-Commerce Inventory System (filter + sort + reduce)

const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 4 },
    { id: 2, name: "Mouse", category: "Electronics", price: 700, stock: 20 },
    { id: 3, name: "Notebook", category: "Stationery", price: 60, stock: 5 },
    { id: 4, name: "Pen", category: "Stationery", price: 20, stock: 50 },
    { id: 5, name: "Chair", category: "Furniture", price: 2500, stock: 2 }
];

// 1. filter(): return products whose stock is below 10.
function getLowStockProducts(productList) {
    return productList.filter(product => product.stock < 10);
}

// 2. sort(): return a new array sorted by price (low to high).
function sortProductsByPrice(productList) {
    return [...productList].sort((a, b) => a.price - b.price);
}

// 3. reduce(): calculate the total value of all available stock.
function calculateTotalInventoryValue(productList) {
    return productList.reduce(
        (total, product) => total + product.price * product.stock,
        0
    );
}

// 4. reduce() + object grouping: group products by category.
function groupByCategory(productList) {
    return productList.reduce((groups, product) => {
        if (!groups[product.category]) {
            groups[product.category] = [];
        }

        groups[product.category].push(product);
        return groups;
    }, {});
}

console.log("Low stock products:", getLowStockProducts(products));
console.log("Products sorted by price:", sortProductsByPrice(products));
console.log(
    "Total inventory value: Rs.",
    calculateTotalInventoryValue(products)
);
console.log("Products grouped by category:", groupByCategory(products));
