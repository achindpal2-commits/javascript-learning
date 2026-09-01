// Day 06 - JavaScript Strings

// ==============================
// 1. Creating Strings
// ==============================

let firstName = "Achind";
let city = 'Mumbai';
let message = `Hello, ${firstName}!`;

console.log(firstName);
console.log(city);
console.log(message);


// ==============================
// 2. String Length
// ==============================

let text = "JavaScript";

console.log(text.length);


// ==============================
// 3. Accessing Characters
// ==============================

console.log(text[0]);
console.log(text[4]);
console.log(text[text.length - 1]);


// ==============================
// 4. charAt()
// ==============================

console.log(text.charAt(0));
console.log(text.charAt(5));


// ==============================
// 5. toUpperCase()
// ==============================

let name = "achind";

console.log(name.toUpperCase());


// ==============================
// 6. toLowerCase()
// ==============================

let language = "JAVASCRIPT";

console.log(language.toLowerCase());


// ==============================
// 7. includes()
// ==============================

let sentence = "I am learning JavaScript";

console.log(sentence.includes("JavaScript"));
console.log(sentence.includes("Python"));


// ==============================
// 8. startsWith()
// ==============================

console.log(sentence.startsWith("I"));
console.log(sentence.startsWith("JavaScript"));


// ==============================
// 9. endsWith()
// ==============================

console.log(sentence.endsWith("JavaScript"));
console.log(sentence.endsWith("learning"));


// ==============================
// 10. trim()
// ==============================

let userName = "   Achind   ";

console.log(userName);
console.log(userName.trim());


// ==============================
// 11. trimStart()
// ==============================

let text1 = "   Hello";

console.log(text1.trimStart());


// ==============================
// 12. trimEnd()
// ==============================

let text2 = "Hello   ";

console.log(text2.trimEnd());


// ==============================
// 13. slice()
// ==============================

let word = "JavaScript";

console.log(word.slice(0, 4));
console.log(word.slice(4));
console.log(word.slice(-6));


// ==============================
// 14. substring()
// ==============================

console.log(word.substring(0, 4));
console.log(word.substring(4, 10));


// ==============================
// 15. replace()
// ==============================

let sentence2 = "I like Java";

console.log(sentence2.replace("Java", "JavaScript"));


// ==============================
// 16. replaceAll()
// ==============================

let fruits = "Apple Apple Apple";

console.log(fruits.replaceAll("Apple", "Mango"));


// ==============================
// 17. split()
// ==============================

let colors = "Red,Green,Blue";

console.log(colors.split(","));

let numbers = "10-20-30-40";

console.log(numbers.split("-"));


// ==============================
// 18. concat()
// ==============================

let first = "Hello";
let second = "World";

console.log(first.concat(" ", second));


// ==============================
// 19. repeat()
// ==============================

let star = "*";

console.log(star.repeat(5));


// ==============================
// 20. indexOf()
// ==============================

let programming = "JavaScript";

console.log(programming.indexOf("S"));
console.log(programming.indexOf("a"));


// ==============================
// 21. lastIndexOf()
// ==============================

let repeated = "JavaScript is a JavaScript language";

console.log(repeated.lastIndexOf("JavaScript"));


// ==============================
// 22. Checking Empty String
// ==============================

let emptyText = "";

console.log(emptyText.length === 0);


// ==============================
// 23. String Comparison
// ==============================

let password = "hello123";

console.log(password === "hello123");
console.log(password === "Hello123");


// ==============================
// 24. Template Literals
// ==============================

let student = "Achind";
let age = 18;

console.log(`My name is ${student} and I am ${age} years old.`);


// ==============================
// 25. Practice Examples
// ==============================

// Count characters
let country = "India";
console.log(country.length);

// First character
console.log(country[0]);

// Last character
console.log(country[country.length - 1]);

// Convert to uppercase
console.log(country.toUpperCase());

// Check word
console.log(country.includes("dia"));

// Extract part of string
console.log(country.slice(0, 3));