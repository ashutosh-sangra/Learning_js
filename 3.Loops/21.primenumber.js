let num = 29; // change this to whatever number you want
let isPrime = true;

if (num < 2) {
  isPrime = false; // 0, 1, and negatives aren't prime
} else if (num === 2) {
  isPrime = true; // 2 is the only even prime
} else if (num % 2 === 0) {
  isPrime = false; // other even numbers aren't prime
} else {
  let i = 3;
  while (i * i <= num) {
    if (num % i === 0) {
      isPrime = false;
      i = num; // force the loop to stop
    } else {
      i = i + 2;
    }
  }
}

if (isPrime) {
  console.log(num + " is a prime number");
} else {
  console.log(num + " is not a prime number");
}
