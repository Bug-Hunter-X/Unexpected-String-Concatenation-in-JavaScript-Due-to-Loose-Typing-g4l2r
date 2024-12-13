# Unexpected String Concatenation in JavaScript
This example demonstrates a common error in JavaScript stemming from its loose typing system. When adding a number and a string, JavaScript performs string concatenation instead of numerical addition, resulting in an unexpected output.

## Bug
The `foo` function attempts to add a number and a string.  Due to JavaScript's type coercion, the number is implicitly converted to a string, leading to concatenation rather than addition.

## Solution
The solution involves explicit type checking or conversion to ensure both operands are numbers before performing addition. This prevents unexpected behavior and improves code robustness.