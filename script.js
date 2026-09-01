// ==========================================
// DAY 6 - JAVASCRIPT STRINGS
// Beginner Practice
// ==========================================


// ------------------------------------------
// 1. Creating Strings
// ------------------------------------------

let firstName = "Achind";
let message = 'I am learning JavaScript';
let course = `JavaScript Strings`;

console.log(firstName);
console.log(message);
console.log(course);


// ------------------------------------------
// 2. length
// Finds the number of characters
// ------------------------------------------

let name = "JavaScript";

console.log(name.length);


// ------------------------------------------
// 3. toUpperCase()
// Converts string to uppercase
// ------------------------------------------

let username = "achind";

console.log(username.toUpperCase());


// ------------------------------------------
// 4. toLowerCase()
// Converts string to lowercase
// ------------------------------------------

let language = "JAVASCRIPT";

console.log(language.toLowerCase());


// ------------------------------------------
// 5. trim()
// Removes spaces from beginning and end
// ------------------------------------------

let email = "   achind@gmail.com   ";

console.log(email.trim());


// ------------------------------------------
// 6. includes()
// Checks if something exists
// Returns true or false
// ------------------------------------------

let sentence = "I am learning JavaScript";

console.log(sentence.includes("JavaScript"));
console.log(sentence.includes("Python"));


// ------------------------------------------
// 7. startsWith()
// Checks how a string starts
// ------------------------------------------

let website = "https://github.com";

console.log(website.startsWith("https"));
console.log(website.startsWith("http"));


// ------------------------------------------
// 8. endsWith()
// Checks how a string ends
// ------------------------------------------

let fileName = "script.js";

console.log(fileName.endsWith(".js"));
console.log(fileName.endsWith(".html"));


// ------------------------------------------
// 9. indexOf()
// Finds the position of a value
// ------------------------------------------

let text = "I love JavaScript";

console.log(text.indexOf("JavaScript"));
console.log(text.indexOf("love"));


// ------------------------------------------
// 10. lastIndexOf()
// Finds the last occurrence
// ------------------------------------------

let fruits = "apple banana apple";

console.log(fruits.lastIndexOf("apple"));


// ------------------------------------------
// 11. charAt()
// Gets character at a particular position
// ------------------------------------------

let city = "Mumbai";

console.log(city.charAt(0));
console.log(city.charAt(3));


// ------------------------------------------
// 12. at()
// Gets character using index
// Negative indexes are also possible
// ------------------------------------------

let word = "JavaScript";

console.log(word.at(0));
console.log(word.at(-1));


// ------------------------------------------
// 13. slice()
// Extracts part of a string
// ------------------------------------------

let programming = "JavaScript Programming";

console.log(programming.slice(0, 10));
console.log(programming.slice(11));


// ------------------------------------------
// 14. substring()
// Extracts part of a string
// ------------------------------------------

let languageName = "JavaScript";

console.log(languageName.substring(0, 4));


// ------------------------------------------
// 15. substr()
// OLD METHOD - avoid using it in new code
// ------------------------------------------

// let value = "JavaScript";
// console.log(value.substr(0, 4));


// ------------------------------------------
// 16. replace()
// Replaces the first matching value
// ------------------------------------------

let sentence1 = "I like JavaScript. JavaScript is easy.";

console.log(sentence1.replace("JavaScript", "Python"));


// ------------------------------------------
// 17. replaceAll()
// Replaces all matching values
// ------------------------------------------

let sentence2 = "JavaScript is fun. JavaScript is powerful.";

console.log(sentence2.replaceAll("JavaScript", "JS"));


// ------------------------------------------
// 18. concat()
// Joins strings
// ------------------------------------------

let first = "Hello";
let second = "Achind";

console.log(first.concat(" ", second));


// ------------------------------------------
// 19. repeat()
// Repeats a string
// ------------------------------------------

let star = "*";

console.log(star.repeat(5));


// ------------------------------------------
// 20. padStart()
// Adds characters at the beginning
// ------------------------------------------

let number = "25";

console.log(number.padStart(5, "0"));


// ------------------------------------------
// 21. padEnd()
// Adds characters at the end
// ------------------------------------------

let price = "100";

console.log(price.padEnd(6, "0"));


// ------------------------------------------
// 22. split()
// Converts string into an array
// ------------------------------------------

let skills = "HTML,CSS,JavaScript";

console.log(skills.split(","));


// ------------------------------------------
// 23. String()
// Converts a value into a string
// ------------------------------------------

let age = 21;

console.log(String(age));
console.log(typeof String(age));


// ------------------------------------------
// 24. charCodeAt()
// Returns character's Unicode number
// ------------------------------------------

let letter = "A";

console.log(letter.charCodeAt(0));


// ------------------------------------------
// 25. codePointAt()
// Returns Unicode code point
// ------------------------------------------

let symbol = "😀";

console.log(symbol.codePointAt(0));


// ==========================================
// REAL WORLD MINI EXAMPLES
// ==========================================


// ------------------------------------------
// Example 1: Clean User Input
// ------------------------------------------

let userInput = "   ACHIND   ";

let cleanName = userInput.trim().toLowerCase();

console.log(cleanName);


// ------------------------------------------
// Example 2: Check Email
// ------------------------------------------

let userEmail = "achind@gmail.com";

console.log(userEmail.includes("@"));
console.log(userEmail.endsWith(".com"));


// ------------------------------------------
// Example 3: File Extension
// ------------------------------------------

let file = "profile.jpg";

if (file.endsWith(".jpg")) {
    console.log("This is a JPG image");
}


// ------------------------------------------
// Example 4: Username Check
// ------------------------------------------

let user = "achind123";

if (user.length >= 5) {
    console.log("Username is valid");
}


// ------------------------------------------
// Example 5: Search Product
// ------------------------------------------

let product = "Apple iPhone 15";

if (product.toLowerCase().includes("iphone")) {
    console.log("iPhone found");
}


// ------------------------------------------
// Example 6: Hide Phone Number
// ------------------------------------------

let phone = "9876543210";

let hiddenPhone = "******" + phone.slice(-4);

console.log(hiddenPhone);


// ------------------------------------------
// Example 7: Extract File Extension
// ------------------------------------------

let documentName = "resume.pdf";

let extension = documentName.slice(documentName.lastIndexOf("."));

console.log(extension);


// ------------------------------------------
// Example 8: Create Full Name
// ------------------------------------------

let fname = "Achind";
let lname = "Pal";

let fullName = fname.concat(" ", lname);

console.log(fullName);


// ------------------------------------------
// END OF DAY 6
// ==========================================