// Q4. Employee Inheritance (Inheritance + Method Overriding)

class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        console.log(`${this.name} works in the ${this.department} department.`);
    }
}

class Manager extends Employee {
    // Manager overrides the work() method.
    work() {
        console.log(`${this.name} manages the ${this.department} department.`);
    }
}

const employee1 = new Employee("Aman", "Development");
const manager1 = new Manager("Neha", "Human Resources");

// Runtime polymorphism: the same method name behaves differently
// depending on the object that calls it.
employee1.work();
manager1.work();
