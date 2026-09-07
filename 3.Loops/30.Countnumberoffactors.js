let n = 6;
let count = 0;
for (let i = 1; i <= n; i++) {
  if (n % i === 0) {
    count++;
  }
}
console.log(`numbers of factors are ${count}`);
