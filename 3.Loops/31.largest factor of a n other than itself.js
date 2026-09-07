let n = 12;
for (let i = n - 1; i >= 1; i--) {
  if (n % i == 0) {
    console.log(`largest factor${i}`);
  }
}
