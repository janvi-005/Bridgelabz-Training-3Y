// Q2. Online Food Ordering (map + reduce + Error Handling)

const menu = [
    { name: "Burger", price: 120 },
    { name: "Pizza", price: 250 },
    { name: "Pasta", price: 180 },
    { name: "Sandwich", price: 90 }
];

function calculateBill(orderItems) {
    // Find each ordered item and throw an error for an invalid item.
    const selectedItems = orderItems.map(itemName => {
        const item = menu.find(menuItem =>
            menuItem.name.toLowerCase() === itemName.toLowerCase()
        );

        if (!item) {
            throw new Error(`"${itemName}" is not available on the menu.`);
        }

        return item;
    });

    // map() creates a list containing only the prices.
    const priceList = selectedItems.map(item => item.price);

    // reduce() calculates the total bill.
    const total = priceList.reduce((sum, price) => sum + price, 0);

    return { priceList, total };
}

// Valid order
try {
    const bill = calculateBill(["Burger", "Pasta"]);
    console.log("Price list:", bill.priceList);
    console.log("Total bill: Rs.", bill.total);
} catch (error) {
    console.log("Unable to place order:", error.message);
}

// Invalid order to demonstrate error handling
try {
    const bill = calculateBill(["Pizza", "Sushi"]);
    console.log("Total bill: Rs.", bill.total);
} catch (error) {
    console.log("Unable to place order:", error.message);
}
