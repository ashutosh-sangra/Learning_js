let num = 12321;
let original = num;
let reversed = 0;

while (num > 0) {
  let digit = num % 10;
  reversed = reversed * 10 + digit;
  num = Math.floor(num / 10);
}

if (original === reversed) {
  console.log(original + " is a palindrome");
} else {
  console.log(original + " is not a palindrome");
}
