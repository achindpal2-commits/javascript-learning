# Day 05 - JavaScript Loops

Today I learned about **loops in JavaScript**.

## Topics Covered

* for loop
* while loop
* do...while loop
* break
* continue
* Counting with loops
* Sum using loops
* Even and odd numbers
* Multiplication table
* Factorial
* Finding largest and smallest numbers

## What is a Loop?

A loop is used to **repeat a block of code multiple times**.

Instead of writing:

```javascript
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
```

We can use a loop:

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

## Types of Loops

### 1. for Loop

Used when we generally know how many times we want to repeat something.

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

### 2. while Loop

Used when the loop should continue while a condition is true.

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
```

### 3. do...while Loop

Runs the code **at least once**, then checks the condition.

```javascript
let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);
```

## break

`break` completely stops the loop.

```javascript
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }

    console.log(i);
}
```

## continue

`continue` skips the current iteration and moves to the next iteration.

```javascript
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }

    console.log(i);
}
```

## Goal

The main goal of Day 05 is to understand **how loops work and how to build logic using loops**.
