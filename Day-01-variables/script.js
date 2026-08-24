// ======================================
// DAY 1 - JAVASCRIPT VARIABLES
// ======================================


// 1. VAR

var name = "Achind";

console.log(name);

// Reassignment
name = "Rahul";

console.log(name);

// Redeclaration
var age = 18;
var age = 20;

console.log(age);


// ======================================
// 2. LET
// ======================================

let city = "Mumbai";

console.log(city);

// Reassignment
city = "Thane";

console.log(city);

// Redeclaration is NOT allowed
// let city = "Pune"; // Error


// ======================================
// 3. CONST
// ======================================

const country = "India";

console.log(country);

// Reassignment is NOT allowed
// country = "USA"; // Error

// Redeclaration is NOT allowed
// const country = "USA"; // Error


// ======================================
// 4. NAMING RULES
// ======================================

let studentName = "Achind";
let age2 = 18;
let first_name = "Achind";
let $price = 500;

console.log(studentName);
console.log(age2);
console.log(first_name);
console.log($price);


// ======================================
// 5. CASE SENSITIVE
// ======================================

let marks = 80;
let Marks = 90;

console.log(marks);
console.log(Marks);


// ======================================
// 6. INITIALIZATION
// ======================================

let score;

score = 100;

console.log(score);


// ======================================
// 7. BLOCK SCOPE
// ======================================

if (true) {
    let message = "Hello JavaScript";

    console.log(message);
}

// message cannot be accessed here
// console.log(message); // Error