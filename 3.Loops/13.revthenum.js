let num = 12345;
let reversed = 0;
let temp = num;

while (temp > 0) {
  let lastDigit = temp % 10;
  reversed = reversed * 10 + lastDigit;
  temp = Math.floor(temp / 10);
}

console.log("Reversed number: " + reversed);
