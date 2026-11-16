// Q1 – The Startup Morning: Async Coffee Maker
// Each function returns a Promise and takes 1–2 seconds.

function waitRandomTime() {
    const delay = 1000 + Math.floor(Math.random() * 1000);
    return new Promise(resolve => setTimeout(resolve, delay));
}

function boilWater() {
    return waitRandomTime().then(() => {
        console.log("Water boiled.");
        if (Math.random() < 0.2) throw new Error("Could not boil water.");
    });
}

function brewCoffee() {
    return waitRandomTime().then(() => {
        console.log("Coffee brewed.");
        if (Math.random() < 0.2) throw new Error("Coffee brewing failed.");
    });
}

function pourCoffee() {
    return waitRandomTime().then(() => {
        console.log("Coffee poured into the cup.");
        if (Math.random() < 0.2) throw new Error("Could not pour coffee.");
    });
}

boilWater()
    .then(() => brewCoffee())
    .then(() => pourCoffee())
    .then(() => console.log("Coffee ready for the team!"))
    .catch(error => console.error("Coffee process failed:", error.message));
