// Q6 – E-Commerce Dashboard: Product Card Fetcher
// Run this in a browser console or in a Node.js version with fetch support.

async function fetchProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
            throw new Error("HTTP error: " + response.status);
        }

        const products = await response.json();

        products.forEach(product => {
            console.log("Product:", product.title);
            console.log("Price: $" + product.price);
            console.log("Image:", product.image);
            console.log("------------------------------");
        });

        // Optional browser bonus: create product cards on the page.
        // Add an element with id="product-container" to your HTML first.
        const container = document.getElementById("product-container");

        if (container) {
            container.innerHTML = "";

            products.forEach(product => {
                const card = document.createElement("div");
                const title = document.createElement("h3");
                const price = document.createElement("p");
                const image = document.createElement("img");

                title.textContent = product.title;
                price.textContent = "$" + product.price;
                image.src = product.image;
                image.alt = product.title;
                image.width = 120;

                card.append(title, price, image);
                container.appendChild(card);
            });
        }
    } catch (error) {
        console.error("Failed to load products. Please try again.", error);
    }
}

fetchProducts();
