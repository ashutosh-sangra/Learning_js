const income = 1200000;

let tax = 0;

if (income <= 300000) {
  tax = 0;
} else if (income <= 700000) {
  tax = (income - 300000) * 0.05;
} else if (income < 1000000) {
  tax = 400000 * 0.05 + (income - 700000) * 0.1;
} else {
  tax = 400000 * 0.05 + 300000 * 0.1 + (income - 1000000) * 0.2;
}

console.log(tax);
