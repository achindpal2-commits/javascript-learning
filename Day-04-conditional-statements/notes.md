# Day 04 - Conditional Statements Notes

## 1. What are Conditional Statements?

Conditional statements allow JavaScript to make decisions.

Simple logic:

```text
IF condition is true
    → do something

ELSE
    → do something else
```

---

## 2. if Statement

Used when we want to execute code only when a condition is true.

```javascript
if (age >= 18) {
    console.log("Adult");
}
```

If `age >= 18` is true, the code runs.

---

## 3. if...else

Used when there are two possibilities.

```javascript
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```

Think:

```text
Condition true  → IF
Condition false → ELSE
```

---

## 4. else if

Used when there are multiple conditions.

```javascript
if (marks >= 90) {
    console.log("A+");
} else if (marks >= 75) {
    console.log("A");
} else if (marks >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}
```

JavaScript checks conditions from top to bottom.

---

## 5. Nested if

An `if` inside another `if`.

```javascript
if (age >= 18) {

    if (hasID) {
        console.log("Allowed");
    }

}
```

It means:

```text
First check age
        ↓
If age is valid
        ↓
Check ID
```

---

## 6. Comparison Operators in Conditions

Common operators:

| Operator | Meaning               |
| -------- | --------------------- |
| `>`      | greater than          |
| `<`      | less than             |
| `>=`     | greater than or equal |
| `<=`     | less than or equal    |
| `===`    | strictly equal        |
| `!==`    | strictly not equal    |

Example:

```javascript
if (age >= 18) {
    console.log("Adult");
}
```

---

## 7. Logical AND `&&`

`&&` means **AND**.

Both conditions must be true.

```javascript
if (age >= 18 && hasLicense === true) {
    console.log("Can drive");
}
```

Think:

```text
Condition 1 AND Condition 2
        ↓
Both must be TRUE
```

---

## 8. Logical OR `||`

`||` means **OR**.

At least one condition must be true.

```javascript
if (day === "Saturday" || day === "Sunday") {
    console.log("Weekend");
}
```

Think:

```text
Condition 1 OR Condition 2
        ↓
Any one can be TRUE
```

---

## 9. NOT `!`

`!` means **NOT**.

It reverses a boolean value.

```javascript
let loggedIn = false;

if (!loggedIn) {
    console.log("Please login");
}
```

Think:

```text
true  → false
false → true
```

---

## 10. Ternary Operator

Ternary is a short way of writing a simple `if...else`.

Syntax:

```javascript
condition ? valueIfTrue : valueIfFalse;
```

Example:

```javascript
let age = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);
```

Normal version:

```javascript
if (age >= 18) {
    result = "Adult";
} else {
    result = "Minor";
}
```

---

## 11. Even or Odd Logic

This is very important.

Use `%` modulus.

```javascript
let number = 10;

if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}
```

Why?

```text
10 % 2 = 0 → Even

7 % 2 = 1 → Odd
```

---

## 12. Positive, Negative or Zero

Logic:

```javascript
if (number > 0) {
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}
```

Think:

```text
number > 0 → Positive
number < 0 → Negative
otherwise   → Zero
```

---

## 13. switch Statement

`switch` is useful when checking one value against multiple fixed values.

```javascript
let day = 2;

switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    default:
        console.log("Invalid day");
}
```

### Important

`break` stops the switch after a matching case.

`default` runs when no case matches.

---

## 14. How to Think About Conditional Questions

When you get a question, don't immediately write code.

First ask:

### Step 1

What value am I checking?

### Step 2

What is the condition?

### Step 3

What should happen if it is true?

### Step 4

What should happen if it is false?

Example:

**Question:** Check whether a number is even or odd.

Think:

```text
Value → number

Condition → number % 2 === 0

TRUE → Even

FALSE → Odd
```

Then write:

```javascript
if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}
```

---

## ⭐ Important Patterns to Remember

### Two possibilities

```javascript
if (condition) {
    // true
} else {
    // false
}
```

### Multiple possibilities

```javascript
if (condition1) {

} else if (condition2) {

} else {

}
```

### AND

```javascript
condition1 && condition2
```

### OR

```javascript
condition1 || condition2
```

### NOT

```javascript
!condition
```

### Ternary

```javascript
condition ? trueValue : falseValue;
```

### Switch

```javascript
switch (value) {
    case 1:
        // code
        break;

    default:
        // code
}
```

---

## 🧠 Day 04 Main Goal

Don't memorize only the syntax.

Learn to convert a question into:

```text
QUESTION
   ↓
WHAT VALUE?
   ↓
WHAT CONDITION?
   ↓
TRUE RESULT
   ↓
FALSE RESULT
   ↓
JAVASCRIPT CODE
```

This is how you start building **programming logic**.
