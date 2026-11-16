// Q9. Fitness App Analytics (filter + reduce + map)

const workoutData = [
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000, calories: 200 }
];

class FitnessAnalytics {
    constructor(data) {
        this.data = data;
    }

    checkData() {
        if (!Array.isArray(this.data) || this.data.length === 0) {
            throw new Error("Workout dataset is empty or invalid.");
        }
    }

    // filter(): active users have more than 7000 steps.
    getActiveUsers() {
        this.checkData();
        return this.data.filter(person => person.steps > 7000);
    }

    // reduce(): calculate the average calories burned.
    getAverageCalories() {
        this.checkData();

        const totalCalories = this.data.reduce(
            (total, person) => total + person.calories,
            0
        );

        return totalCalories / this.data.length;
    }

    // map(): format each user's workout data as a message.
    getUserSummary() {
        this.checkData();

        return this.data.map(person =>
            `${person.user} walked ${person.steps} steps and burned ${person.calories} calories.`
        );
    }
}

try {
    const analytics = new FitnessAnalytics(workoutData);

    console.log("Active users:", analytics.getActiveUsers());
    console.log(
        "Average calories:",
        analytics.getAverageCalories().toFixed(2)
    );
    console.log("User summaries:");
    analytics.getUserSummary().forEach(message => console.log(message));
} catch (error) {
    console.log("Analytics error:", error.message);
}

// Empty dataset example to demonstrate error handling.
try {
    const emptyAnalytics = new FitnessAnalytics([]);
    emptyAnalytics.getAverageCalories();
} catch (error) {
    console.log("Empty dataset error:", error.message);
}
