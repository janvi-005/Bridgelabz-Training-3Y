// Q1. Student Result Processing (reduce + Classes)

class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        // reduce() adds all marks, then we divide by the number of subjects.
        const total = this.marks.reduce((sum, mark) => sum + mark, 0);
        return total / this.marks.length;
    }

    getGrade() {
        const average = this.calculateAverage();

        if (average >= 80) return "A";
        if (average >= 60) return "B";
        if (average >= 40) return "C";
        return "F";
    }
}

// Test the class for three students.
const students = [
    new Student("Aarav", [85, 90, 78]),
    new Student("Riya", [65, 72, 60]),
    new Student("Kabir", [30, 45, 35])
];

students.forEach(student => {
    console.log(
        `${student.name}: Average = ${student.calculateAverage().toFixed(2)}, Grade = ${student.getGrade()}`
    );
});

// Grade boundaries were not specified in the question; this solution uses:
// A = 80+, B = 60–79.99, C = 40–59.99, F = below 40.
