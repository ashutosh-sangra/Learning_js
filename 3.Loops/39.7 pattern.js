let n = 5;

for (let i = 1; i <= n; i++) {
  for (let j = i + 1; j <= n; j++) {
    process.stdout.write(`(${i}, ${j})`);
  }
  console.log();
}
