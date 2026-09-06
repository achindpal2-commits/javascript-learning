// ==========================================
// JAVASCRIPT ARRAYS
// ==========================================

// 1. Creating an Array

let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits);


// 2. Accessing Array Elements

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Mango

// Last element
console.log(fruits[fruits.length - 1]); // Orange


// 3. Changing Array Elements

fruits[1] = "Grapes";

console.log(fruits);


// 4. Array Length

console.log(fruits.length);


// ==========================================
// ARRAY METHODS
// ==========================================

// 5. push()
// Adds an element at the end

fruits.push("Watermelon");

console.log(fruits);


// 6. pop()
// Removes the last element

fruits.pop();

console.log(fruits);


// 7. unshift()
// Adds an element at the beginning

fruits.unshift("Pineapple");

console.log(fruits);


// 8. shift()
// Removes the first element

fruits.shift();

console.log(fruits);


// 9. includes()
// Checks whether an element exists

console.log(fruits.includes("Mango")); // true
console.log(fruits.includes("Kiwi"));  // false


// 10. indexOf()
// Returns the index of an element

console.log(fruits.indexOf("Mango"));


// 11. join()
// Converts array into a string

let fruitString = fruits.join(", ");

console.log(fruitString);


// 12. slice()
// Returns a portion of an array
// Original array is not changed

let selectedFruits = fruits.slice(1, 3);

console.log(selectedFruits);
console.log(fruits);


// 13. splice()
// Adds/removes elements
// Original array is changed

fruits.splice(1, 1);

console.log(fruits);


// ==========================================
// forEach()
// ==========================================

let numbers = [10, 20, 30, 40, 50];

numbers.forEach(function(number) {
    console.log(number);
});


// forEach() with index

numbers.forEach(function(number, index) {
    console.log("Index:", index, "Value:", number);
});


// ==========================================
// map()
// ==========================================

// Creates a new array

let marks = [10, 20, 30, 40, 50];

let doubleMarks = marks.map(function(mark) {
    return mark * 2;
});

console.log(doubleMarks);


// Arrow function with map()

let squares = numbers.map(number => number * number);

console.log(squares);


// ==========================================
// filter()
// ==========================================

// Returns elements that satisfy a condition

let ages = [12, 18, 25, 15, 30, 16];

let adults = ages.filter(function(age) {
    return age >= 18;
});

console.log(adults);


// Filter even numbers

let evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers);


// ==========================================
// reduce()
// ==========================================

// Reduces an array to a single value

let prices = [100, 200, 300, 400];

let total = prices.reduce(function(sum, price) {
    return sum + price;
}, 0);

console.log("Total:", total);


// Find largest number

let largest = numbers.reduce(function(max, number) {
    return number > max ? number : max;
}, numbers[0]);

console.log("Largest:", largest);


// ==========================================
// find()
// ==========================================

// Returns the first element satisfying condition

let numbers2 = [5, 10, 15, 20, 25];

let result = numbers2.find(number => number > 15);

console.log(result);


// ==========================================
// findIndex()
// ==========================================

let index = numbers2.findIndex(number => number > 15);

console.log(index);


// ==========================================
// some()
// ==========================================

// Checks whether at least one element
// satisfies the condition

let hasBigNumber = numbers2.some(number => number > 20);

console.log(hasBigNumber);


// ==========================================
// every()
// ==========================================

// Checks whether ALL elements
// satisfy the condition

let allPositive = numbers2.every(number => number > 0);

console.log(allPositive);


// ==========================================
// sort()
// ==========================================

// Sorts strings alphabetically

let names = ["Rahul", "Amit", "Zoya", "Karan"];

names.sort();

console.log(names);


// Sort numbers in ascending order

let nums = [50, 10, 5, 100, 25];

nums.sort((a, b) => a - b);

console.log(nums);


// Sort numbers in descending order

nums.sort((a, b) => b - a);

console.log(nums);


// ==========================================
// reverse()
// ==========================================

let letters = ["A", "B", "C", "D"];

letters.reverse();

console.log(letters);


// ==========================================
// concat()
// ==========================================

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let combined = arr1.concat(arr2);

console.log(combined);


// ==========================================
// PRACTICE EXAMPLES
// ==========================================

// Example 1: Print all numbers

let data = [10, 20, 30, 40, 50];

data.forEach(number => {
    console.log(number);
});


// Example 2: Create squares

let squareNumbers = data.map(number => number * number);

console.log(squareNumbers);


// Example 3: Find even numbers

let evens = data.filter(number => number % 2 === 0);

console.log(evens);


// Example 4: Find sum

let sum = data.reduce((total, number) => total + number, 0);

console.log(sum);


// Example 5: Check if number exists

console.log(data.includes(30));


// Example 6: Find first number greater than 25

let firstLarge = data.find(number => number > 25);

console.log(firstLarge);


// Example 7: Check if any number is greater than 40

let greaterThan40 = data.some(number => number > 40);

console.log(greaterThan40);


// Example 8: Check if every number is positive

let positive = data.every(number => number > 0);

console.log(positive);