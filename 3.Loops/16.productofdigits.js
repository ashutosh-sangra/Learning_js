let num = 1234;
let product = 1;
let temp = num;

while (temp > 0) {
  let lastDigit = temp % 10;
  product *= lastDigit;
  temp = (temp - lastDigit) / 10;
}

console.log("Product of digits: " + product);
