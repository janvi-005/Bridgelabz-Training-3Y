// Q5. Ride-Sharing Application (Classes + Error Handling)

class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle, vehicleNumber) {
        super(name, rating);
        this.vehicle = vehicle;
        this.vehicleNumber = vehicleNumber;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (this.distance === undefined || this.distance === null ||
            this.distance === "" || !Number.isFinite(Number(this.distance)) ||
            Number(this.distance) < 0) {
            throw new Error("A valid, non-negative trip distance is required.");
        }

        const ratePerKm = 12; // Example fare rate
        return Number(this.distance) * ratePerKm;
    }
}

const rider = new User("Rohan", 4.8);
const driver = new Driver("Meera", 4.9, "Car", "UP-XX-1234");

console.log("Rider:", rider.name, "| Rating:", rider.rating);
console.log(
    "Driver:", driver.name,
    "| Vehicle:", driver.vehicle,
    "| Number:", driver.vehicleNumber
);

try {
    const trip = new Trip("Mathura", "Agra", 60);
    console.log(`Trip: ${trip.fromLocation} to ${trip.toLocation}`);
    console.log("Fare: Rs.", trip.calculateFare());
} catch (error) {
    console.log("Unable to calculate fare:", error.message);
}

// Invalid distance example
try {
    const invalidTrip = new Trip("Mathura", "Agra", -5);
    console.log("Fare: Rs.", invalidTrip.calculateFare());
} catch (error) {
    console.log("Trip error:", error.message);
}
