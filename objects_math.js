// Question 1 Task 1:  Create a constructor function for the Account object with properties for accountNumber, balance, and owner.
function Account(accountNumber, owner, intialBalance = 0) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.balance = initalBalance;
}

// Task 2: Implement methods within the Account object to deposit and withdraw funds.
Account.prototype.deposit = function(amount) {
    if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited: ${amount}. New balance: ${this.balance}.`);
    } else {
        console.log(`Deposit amount must be positive.`);
    }
};

Account.prototype.withdraw = function(amount) {
    if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrew: ${amount}. New balance: ${this.balance}.`)
    } else if (amount > this.balance) {
        console.log('Insufficent fund.');
    } else {
        console.log('Withdrawal amount must be positive.');
    }
};


// Task 3: Create a method to calculate compound interest based on the balance and specified interest rate.
Account.prototype.calculateInterest = function(annualRate, years) {
    if (annualRate > 0 && years > 0) {
        const interestRate = annualRate / 100;
        const compoundInterest = this.balance * (Math.pow((1 + interestRate), years) - 1);
        console.log(`Interest after ${years} years at an annual rate of ${annualRate}%: ${compoundInterest.toFixed(2)}`);
        return compoundInterest;
    } else {
        console.log('Interest rate and years must be positive.');
        return 0;
    }
};

// Example Useage

const account1 = new Account('12345', 'Alice Smith', 9000);
account1.deposit(600);
account1.withdraw(200);
const interest = account1.calculateInterest(5, 2);
console.log(`final balance after interest: ${(account.balance + interest).toFixed(2)}`);

