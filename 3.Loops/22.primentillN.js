let n = 50; // change this to whatever upper limit you want

for (let num = 2; num <= n; num++) {
  let isPrime = true;

  if (num === 2) {
    isPrime = true; // 2 is the only even prime
  } else if (num % 2 === 0) {
    isPrime = false; // skip other even numbers
  } else {
    let i = 3;
    while (i * i <= num) {
      if (num % i === 0) {
        isPrime = false;
        i = num; // force loop to stop
      } else {
        i = i + 2;
      }
    }
  }

  if (isPrime) {
    console.log(num);
  }
}
