let num = 12345; // change this to whatever number you want
let sum = 0;
let temp = num;

while (temp > 0) {
  let lastDigit = temp % 10;
  sum += lastDigit;
  temp = Math.floor(temp / 10); // integer division without Math.floor //temp-lastdigit//
}

console.log("Sum of digits: " + sum);
