let num = 1234589; // change this to whatever number you want
let count = 0;
let temp = num;

if (num === 0) {
  count = 1; // special case: 0 has 1 digit
} else {
  //   temp = Math.abs(temp); // handle negative numbers
  while (temp > 0) {
    let lastd = temp % 10;
    count++;
    temp = Math.floor(temp / 10);
  }
}

console.log("Number of digits: " + count);
