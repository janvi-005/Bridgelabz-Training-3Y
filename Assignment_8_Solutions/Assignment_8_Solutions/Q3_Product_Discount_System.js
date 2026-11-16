// Q3. Product Discount System (Constructor Function + Prototype)

// Constructor function
function Product(name, price) {
    this.name = name;
    this.price = price;
}

// Prototype method is shared by all Product objects.
Product.prototype.applyDiscount = function (percent) {
    if (percent < 0 || percent > 100) {
        throw new Error("Discount must be between 0 and 100.");
    }

    return this.price - (this.price * percent / 100);
};

const product1 = new Product("Laptop", 50000);
const product2 = new Product("Headphones", 3000);
const product3 = new Product("Keyboard", 2000);

const productsAndDiscounts = [
    { product: product1, discount: 10 },
    { product: product2, discount: 20 },
    { product: product3, discount: 15 }
];

productsAndDiscounts.forEach(({ product, discount }) => {
    const newPrice = product.applyDiscount(discount);
    console.log(
        `${product.name}: Original price = Rs. ${product.price}, ` +
        `Discount = ${discount}%, New price = Rs. ${newPrice.toFixed(2)}`
    );
});

// Abstraction: the user calls applyDiscount(percent) without needing
// to repeat or understand the discount calculation each time.
