// ========================================
// DAY 03 - JAVASCRIPT OPERATORS
// ========================================


// ========================================
// 1. ARITHMETIC OPERATORS
// ========================================

let a = 10;
let b = 3;

console.log("Addition:", a + b);        // 13
console.log("Subtraction:", a - b);     // 7
console.log("Multiplication:", a * b);  // 30
console.log("Division:", a / b);        // 3.333...
console.log("Remainder:", a % b);       // 1
console.log("Power:", a ** b);          // 1000


// ========================================
// 2. ASSIGNMENT OPERATORS
// ========================================

let x = 10;

console.log("x =", x);

x += 5;   // x = x + 5
console.log("After +=:", x);

x -= 3;   // x = x - 3
console.log("After -=:", x);

x *= 2;   // x = x * 2
console.log("After *=:", x);

x /= 4;   // x = x / 4
console.log("After /=:", x);


// ========================================
// 3. COMPARISON OPERATORS
// ========================================

let p = 10;
let q = 5;

console.log(p == q);    // false
console.log(p != q);    // true
console.log(p === q);   // false
console.log(p !== q);   // true

console.log(p > q);     // true
console.log(p < q);     // false
console.log(p >= q);    // true
console.log(p <= q);    // false


// ========================================
// 4. LOGICAL OPERATORS
// ========================================

let age = 20;
let hasID = true;

// AND (&&)
console.log(age >= 18 && hasID === true);  // true

// OR (||)
console.log(age >= 18 || hasID === false); // true

// NOT (!)
console.log(!hasID);                       // false


// ========================================
// 5. INCREMENT AND DECREMENT
// ========================================

let count = 5;

count++;
console.log("After increment:", count);  // 6

count--;
console.log("After decrement:", count);  // 5


// ========================================
// 6. TERNARY OPERATOR
// ========================================

let marks = 70;

let result = marks >= 40 ? "Pass" : "Fail";

console.log("Result:", result);


// ========================================
// 7. TYPE OF OPERATOR
// ========================================

let name = "Achind";
let number = 100;
let isStudent = true;

console.log(typeof name);       // string
console.log(typeof number);     // number
console.log(typeof isStudent);  // boolean


// ========================================
// 8. BITWISE OPERATORS
// ========================================

let num1 = 5;
let num2 = 3;

console.log("Bitwise AND:", num1 & num2);
console.log("Bitwise OR:", num1 | num2);
console.log("Bitwise XOR:", num1 ^ num2);
console.log("Bitwise NOT:", ~num1);