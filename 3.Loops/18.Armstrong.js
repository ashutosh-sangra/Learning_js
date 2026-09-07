let num = 375;
let original = num;
let temp = num;

// Step 1: count the number of digits
let digitCount = 0;
while (temp > 0) {
  digitCount++;
  temp = Math.floor(temp / 10);
}

// Step 2: calculate sum of digits raised to digitCount
let sum = 0;
temp = num;
while (temp > 0) {
  let digit = temp % 10;

  // manual power calculation (digit ^ digitCount)
  let power = 1;
  for (let i = 0; i < digitCount; i++) {
    power = power * digit;
  }

  sum = sum + power;
  temp = Math.floor(temp / 10);
}

// Step 3: compare
if (sum === original) {
  console.log(original + " is an Armstrong number");
} else {
  console.log(original + " is not an Armstrong number");
}
