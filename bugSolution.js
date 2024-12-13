function foo(a, b) {
  // Explicit type checking
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    //Handle the error or convert the values to numbers
    return Number(a) + Number(b);
  }
}
console.log(foo(1, 2)); // Output: 3
console.log(foo(1, "2")); //Output: 3