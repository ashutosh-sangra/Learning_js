let n = 10; // number of terms
let first = 0;
let second = 1;

console.log("Fibonacci series up to " + n + " terms:");

for (let i = 1; i <= n; i++) {
  console.log(first);

  let next = first + second;
  first = second;
  second = next;
}
