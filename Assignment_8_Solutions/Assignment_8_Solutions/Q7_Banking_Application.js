// Q7. Banking Application (Private Fields + Error Handling)

class BankAccount {
    #balance;

    constructor(initialBalance = 0) {
        if (initialBalance < 0) {
            throw new Error("Initial balance cannot be negative.");
        }
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (!Number.isFinite(amount) || amount <= 0) {
            throw new Error("Deposit amount must be a positive number.");
        }

        this.#balance += amount;
        console.log(`Deposited Rs. ${amount}`);
    }

    withdraw(amount) {
        if (!Number.isFinite(amount) || amount <= 0) {
            throw new Error("Withdrawal amount must be a positive number.");
        }

        if (amount > this.#balance) {
            throw new Error("Insufficient balance. Withdrawal cannot be completed.");
        }

        this.#balance -= amount;
        console.log(`Withdrawn Rs. ${amount}`);
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount(1000);

// Valid deposits
try {
    account.deposit(500);
    account.deposit(250);
    console.log("Current balance: Rs.", account.getBalance());
} catch (error) {
    console.log("Transaction error:", error.message);
}

// Invalid withdrawal handled using try-catch
try {
    account.withdraw(5000);
} catch (error) {
    console.log("Transaction error:", error.message);
}

console.log("Final balance: Rs.", account.getBalance());

// The #balance field cannot be accessed directly from outside the class.
