// ==========================================
// DAY 05 - JAVASCRIPT LOOPS
// ==========================================


// ==========================================
// 1. FOR LOOP
// ==========================================

// Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// Print even numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


// Print odd numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}


// Print numbers from 10 to 1
for (let i = 10; i >= 1; i--) {
    console.log(i);
}


// Multiplication table of 5
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}


// Find sum from 1 to 10
let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum = sum + i;
}

console.log("Sum:", sum);


// ==========================================
// 2. WHILE LOOP
// ==========================================

// Print numbers from 1 to 10
let i = 1;

while (i <= 10) {
    console.log(i);
    i++;
}


// Print even numbers from 1 to 20
let num = 1;

while (num <= 20) {
    if (num % 2 === 0) {
        console.log(num);
    }

    num++;
}


// Countdown from 10 to 1
let count = 10;

while (count >= 1) {
    console.log(count);
    count--;
}


// Find sum from 1 to 10
let total = 0;
let n = 1;

while (n <= 10) {
    total = total + n;
    n++;
}

console.log("While Sum:", total);


// ==========================================
// 3. DO...WHILE LOOP
// ==========================================

// Print numbers from 1 to 5
let x = 1;

do {
    console.log(x);
    x++;
} while (x <= 5);


// do...while runs at least once
let value = 10;

do {
    console.log("This runs at least once");
    value++;
} while (value < 5);


// ==========================================
// 4. BREAK
// ==========================================

// Stop the loop when i becomes 5
for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        break;
    }

    console.log(i);
}


// ==========================================
// 5. CONTINUE
// ==========================================

// Skip number 5
for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        continue;
    }

    console.log(i);
}


// ==========================================
// 6. FACTORIAL
// ==========================================

// Factorial of 5
let factorial = 1;

for (let i = 1; i <= 5; i++) {
    factorial = factorial * i;
}

console.log("Factorial:", factorial);


// ==========================================
// 7. COUNT DIVISIBLE BY 5
// ==========================================

// Count numbers divisible by 5 from 1 to 100
let divisibleCount = 0;

for (let i = 1; i <= 100; i++) {

    if (i % 5 === 0) {
        divisibleCount++;
    }

}

console.log("Count:", divisibleCount);


// ==========================================
// 8. LARGEST NUMBER
// ==========================================

// Find largest number from 1 to 100
let largest = 1;

for (let i = 2; i <= 100; i++) {

    if (i > largest) {
        largest = i;
    }

}

console.log("Largest:", largest);


// ==========================================
// 9. SMALLEST NUMBER
// ==========================================

// Find smallest number from 1 to 100
let smallest = 1;

for (let i = 2; i <= 100; i++) {

    if (i < smallest) {
        smallest = i;
    }

}

console.log("Smallest:", smallest);


// ==========================================
// END OF DAY 05
// ==========================================