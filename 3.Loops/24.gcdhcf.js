let a = 36; // first number
let b = 60; // second number

let num1 = a;
let num2 = b;

while (num2 !== 0) {
  let remainder = num1 % num2;
  num1 = num2;
  num2 = remainder;
}

console.log("GCD of " + a + " and " + b + " is: " + num1);
