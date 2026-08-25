// Day 02 - JavaScript Datatypes

// ====================
// PRIMITIVE DATATYPES
// ====================

// 1. String
let name = "Achind";
console.log(name);

// 2. Number
let age = 18;
console.log(age);

// 3. Boolean
let isStudent = true;
console.log(isStudent);

// 4. Undefined
let city;
console.log(city);

// 5. Null
let address = null;
console.log(address);

// 6. BigInt
let bigNumber = 12345678901234567890n;
console.log(bigNumber);

// 7. Symbol
let id = Symbol("id");
console.log(id);


// ====================
// NON-PRIMITIVE DATATYPES
// ====================

// 1. Object
let student = {
    name: "Achind",
    age: 18
};
console.log(student);

// 2. Array
let fruits = ["Apple", "Mango", "Banana"];
console.log(fruits);


// ====================
// typeof
// ====================

console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof city);
console.log(typeof address);
console.log(typeof student);
console.log(typeof fruits);