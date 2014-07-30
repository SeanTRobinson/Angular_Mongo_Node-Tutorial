var events = require("events");
function Account() {
    this.balance = 0;
    events.EventEmitter.call(this);
    this.deposit = function(amount) {
        console.log("Adding %d to account", amount);
        this.balance += amount;
        this.emit('balanceChanged');
    };
    this.withdraw = function(amount) {
        console.log("Removing %d from account", amount);
        this.balance -= amount;
        this.emit('balanceChanged');
    };
}

Account.prototype.__proto__ = events.EventEmitter.prototype;
function displayBalance() {
    console.log("Account Balance: %d", this.balance);
}
function checkOverdrawn() {
    if(this.balance < 0) {
        console.log("Account Overdrawn");
    }
}
function checkGoal(acc, goal) {
    if(acc.balance > goal) {
        console.log("Goal Achieved!");
    }
}

var account = new Account();
account.on("balanceChanged", displayBalance);
account.on("balanceChanged", checkOverdrawn);
account.on("balanceChanged", function() {
    checkGoal(this, 1000);
});

account.deposit(220);
account.deposit(320);
account.deposit(600);
account.withdraw(1200);

  
