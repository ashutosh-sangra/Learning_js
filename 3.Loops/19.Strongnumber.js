let num = 145;
let original = num;
let temp = num;
let sum = 0;

while (temp > 0) {
  let digit = temp % 10;

  // manual factorial calculation
  let fact = 1;
  for (let i = 1; i <= digit; i++) {
    fact = fact * i;
  }

  sum = sum + fact;
  temp = Math.floor(temp / 10);
}

if (sum === original) {
  console.log(original + " is a Strong number");
} else {
  console.log(original + " is not a Strong number");
}
