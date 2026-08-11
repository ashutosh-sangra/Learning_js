let n = 20;

for (let i = 1; i <= n; i++) {
  if (i % 3 === 0) {
    count++;
  }
}

console.log("Count of numbers from 1 to " + n + " divisible by 3 is: " + count);
