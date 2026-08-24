let a = 4; // first number
let b = 6; // second number

let num1 = a;
let num2 = b;

// Step 1: find GCD using Euclidean algorithm
while (num2 !== 0) {
  let remainder = num1 % num2;
  num1 = num2;
  num2 = remainder;
}

let gcd = num1;

// Step 2: use GCD to find LCM
let lcm = (a * b) / gcd;

console.log("GCD of " + a + " and " + b + " is: " + gcd);
console.log("LCM of " + a + " and " + b + " is: " + lcm);
