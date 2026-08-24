let n = 10; // upper limit
let sum = 0;

for (let i = 1; i <= n; i++) {
  sum = sum + i * i * i;
}

console.log("Sum of cubes from 1 to " + n + " is: " + sum);
