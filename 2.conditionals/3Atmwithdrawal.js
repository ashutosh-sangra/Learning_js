let balance = 5000;
let withdrawalAmount = 2000;

if (withdrawalAmount <= 0) {
  console.log("Invalid amount");
} else if (withdrawalAmount > balance) {
  console.log("Insufficient balance");
} else {
  balance = balance - withdrawalAmount;
  console.log("Transaction successful");
  console.log("Remaining balance:", balance);
}
