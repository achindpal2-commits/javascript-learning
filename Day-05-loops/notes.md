# Day 05 Notes - JavaScript Loops

## 1. What is a Loop?

A loop means:

> **Repeat the same code until a condition becomes false.**

Example:

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

Output:

```text
1
2
3
4
5
```

---

# 2. for Loop

The basic structure is:

```javascript
for (initialization; condition; update) {
    // code
}
```

Example:

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

### Understand the three parts

```javascript
for (let i = 1; i <= 5; i++)
```

### `let i = 1`

Starting point.

### `i <= 5`

Condition.

As long as this is `true`, the loop runs.

### `i++`

Update.

It increases `i` by 1 after every iteration.

---

# 3. How for Loop Works

```javascript
for (let i = 1; i <= 3; i++) {
    console.log(i);
}
```

Step-by-step:

```text
i = 1
1 <= 3 → true → print 1

i = 2
2 <= 3 → true → print 2

i = 3
3 <= 3 → true → print 3

i = 4
4 <= 3 → false → stop
```

---

# 4. while Loop

Syntax:

```javascript
while (condition) {
    // code
}
```

Example:

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
```

Important:

In a `while` loop, remember to update the variable.

```javascript
i++;
```

Otherwise, you can create an **infinite loop**.

---

# 5. do...while Loop

Syntax:

```javascript
do {
    // code
} while (condition);
```

Example:

```javascript
let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);
```

### Main difference

`do...while` executes the code **first** and checks the condition **afterwards**.

Therefore, it always runs at least once.

Example:

```javascript
let i = 10;

do {
    console.log("Hello");
} while (i < 5);
```

Output:

```text
Hello
```

Even though `10 < 5` is false.

---

# 6. for vs while vs do...while

| Loop       | Condition Check  | Minimum Execution |
| ---------- | ---------------- | ----------------- |
| for        | Before execution | 0 times           |
| while      | Before execution | 0 times           |
| do...while | After execution  | 1 time            |

### Easy rule

**for**

Use when you know the number of repetitions.

```javascript
for (let i = 1; i <= 10; i++)
```

**while**

Use when you mainly want to continue based on a condition.

```javascript
while (condition)
```

**do...while**

Use when the code must execute at least once.

```javascript
do {
    
} while (condition);
```

---

# 7. break

`break` means:

> Stop the entire loop.

Example:

```javascript
for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        break;
    }

    console.log(i);
}
```

Output:

```text
1
2
3
4
```

When `i` becomes `5`, the loop stops.

---

# 8. continue

`continue` means:

> Skip the current iteration and continue with the next one.

Example:

```javascript
for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    console.log(i);
}
```

Output:

```text
1
2
4
5
```

Only `3` was skipped.

---

# 9. Important Loop Operators

### Increase

```javascript
i++;
```

Same as:

```javascript
i = i + 1;
```

### Decrease

```javascript
i--;
```

Same as:

```javascript
i = i - 1;
```

### Add a specific amount

```javascript
i += 2;
```

Same as:

```javascript
i = i + 2;
```

---

# 10. Logic Building with Loops

When solving a loop question, think in this order:

### Step 1 — What should I repeat?

Example:

```text
Print numbers
```

### Step 2 — Where should I start?

```text
1
```

### Step 3 — Where should I stop?

```text
10
```

### Step 4 — How should I move?

```text
+1
```

Then:

```javascript
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
```

---

# 11. Example: Even Numbers

Question:

**Print even numbers from 1 to 20.**

Think:

```text
Start → 1
End → 20
Check → number % 2 === 0
```

Code:

```javascript
for (let i = 1; i <= 20; i++) {

    if (i % 2 === 0) {
        console.log(i);
    }

}
```

---

# 12. Example: Sum

Question:

**Find the sum from 1 to 10.**

First create a variable:

```javascript
let sum = 0;
```

Then add every number:

```javascript
for (let i = 1; i <= 10; i++) {
    sum = sum + i;
}
```

Finally:

```javascript
console.log(sum);
```

---

# 13. Example: Factorial

Factorial means multiplying a number by all positive integers below it.

For `5`:

```text
5 × 4 × 3 × 2 × 1
= 120
```

Code:

```javascript
let factorial = 1;

for (let i = 1; i <= 5; i++) {
    factorial = factorial * i;
}

console.log(factorial);
```

---

# 14. Most Important Beginner Pattern

Remember this structure:

```javascript
let result = 0;

for (let i = start; i <= end; i++) {

    if (condition) {
        result = result + i;
    }

}

console.log(result);
```

This type of thinking will help with many problems.

---

# Day 05 Key Points

* Loop = repeat code.
* `for` = commonly used when repetitions are known.
* `while` = condition checked before running.
* `do...while` = runs once before checking.
* `break` = completely stops the loop.
* `continue` = skips current iteration.
* `i++` = increase by 1.
* `i--` = decrease by 1.
* `%` is very useful for even/odd and divisibility problems.
* Always carefully decide **start, condition, and update**.

## Practice Goal

Before moving to the next topic, practice:

1. Print 1–100.
2. Print 100–1.
3. Print even numbers.
4. Print odd numbers.
5. Find sum.
6. Find factorial.
7. Print multiplication tables.
8. Count numbers divisible by 5.
9. Find largest number.
10. Find smallest number.
11. Use `break`.
12. Use `continue`.
13. Solve the same simple problem using `for` and `while`.
