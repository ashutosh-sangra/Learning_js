let num = 1234; // change this to whatever number you want
let sum = 0;
let temp = num;

while (temp > 0) {
  let lastDigit = temp % 10;
  sum += lastDigit;
  temp = (temp - lastDigit) / 10; // integer division without Math.floor
}

console.log("Sum of digits: " + sum);
