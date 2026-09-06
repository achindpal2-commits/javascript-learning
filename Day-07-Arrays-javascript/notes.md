# JavaScript Arrays — Quick Notes

## 1. Array Definition

An array is a collection of multiple values stored inside a single variable.

```javascript
let fruits = ["Apple", "Banana", "Mango"];
```

---

## 2. Index

JavaScript arrays start from index `0`.

```text
Apple   → 0
Banana  → 1
Mango   → 2
```

```javascript
console.log(fruits[0]);
```

---

## 3. length

Returns the number of elements.

```javascript
fruits.length
```

---

# Basic Methods

### push()

Adds at the end.

```javascript
arr.push(value);
```

### pop()

Removes from the end.

```javascript
arr.pop();
```

### unshift()

Adds at the beginning.

```javascript
arr.unshift(value);
```

### shift()

Removes from the beginning.

```javascript
arr.shift();
```

### includes()

Checks whether a value exists.

```javascript
arr.includes(value);
```

Returns:

```text
true / false
```

### indexOf()

Returns the index of a value.

```javascript
arr.indexOf(value);
```

### join()

Converts array into string.

```javascript
arr.join(", ");
```

### slice()

Extracts part of an array.

```javascript
arr.slice(start, end);
```

Does not modify the original array.

### splice()

Adds/removes elements.

```javascript
arr.splice(start, deleteCount);
```

Modifies the original array.

---

# Important Higher-Order Methods

## forEach()

Used to execute code for every element.

```javascript
arr.forEach(item => {
    console.log(item);
});
```

**Remember:** forEach = do something for each

---

## map()

Creates a new array by transforming each element.

```javascript
let result = arr.map(item => item * 2);
```

**Remember:** map = transform

Example:

```javascript
[1, 2, 3]
```

becomes:

```javascript
[2, 4, 6]
```

---

## filter()

Creates a new array containing matching elements.

```javascript
let result = arr.filter(item => item > 10);
```

**Remember:** filter = select

Example:

```javascript
[5, 10, 15, 20]
```

with:

```javascript
item > 10
```

gives:

```javascript
[15, 20]
```

---

## reduce()

Combines array values into one final value.

```javascript
let result = arr.reduce((total, item) => {
    return total + item;
}, 0);
```

**Remember:** reduce = combine

Example:

```javascript
[10, 20, 30]
```

becomes:

```text
60
```

---

## find()

Returns the first matching element.

```javascript
arr.find(item => item > 10);
```

**Remember:** find = first matching value

---

## findIndex()

Returns the index of the first matching element.

```javascript
arr.findIndex(item => item > 10);
```

---

## some()

Returns `true` if at least one element passes the condition.

```javascript
arr.some(item => item > 10);
```

**Remember:** some = at least one

---

## every()

Returns `true` if all elements pass the condition.

```javascript
arr.every(item => item > 10);
```

**Remember:** every = all

---

## sort()

Sorts an array.

### Ascending numbers

```javascript
arr.sort((a, b) => a - b);
```

### Descending numbers

```javascript
arr.sort((a, b) => b - a);
```

---

## reverse()

Reverses an array.

```javascript
arr.reverse();
```

---

## concat()

Combines two or more arrays.

```javascript
let result = arr1.concat(arr2);
```

---

# ⭐ Important Difference

## map vs filter vs reduce

### map()

```javascript
let result = numbers.map(n => n * 2);
```

Purpose:

```text
Transform every element
```

Returns:

```text
New Array
```

---

### filter()

```javascript
let result = numbers.filter(n => n > 10);
```

Purpose:

```text
Select elements based on condition
```

Returns:

```text
New Array
```

---

### reduce()

```javascript
let result = numbers.reduce((sum, n) => sum + n, 0);
```

Purpose:

```text
Combine all elements
```

Usually returns:

```text
Single Value
```

---

# 🧠 Memory Trick

```text
forEach → Do
map     → Transform
filter  → Select
reduce  → Combine
find    → First match
some    → At least one
every   → All
sort    → Arrange
reverse → Reverse
```

---

# 🔥 Common Examples

## Double numbers

```javascript
let result = [1, 2, 3, 4].map(n => n * 2);
```

## Find even numbers

```javascript
let result = [1, 2, 3, 4].filter(n => n % 2 === 0);
```

## Find total

```javascript
let result = [10, 20, 30].reduce((sum, n) => sum + n, 0);
```

## Find first number greater than 20

```javascript
let result = [10, 20, 30, 40].find(n => n > 20);
```

## Check if any number is greater than 50

```javascript
let result = [10, 20, 60].some(n => n > 50);
```

## Check if all numbers are positive

```javascript
let result = [10, 20, 30].every(n => n > 0);
```

---

# ⚠️ Important

`slice()` does not modify the original array.

`splice()` modifies the original array.

`map()` returns a new array.

`filter()` returns a new array.

`reduce()` normally returns a single value.

`forEach()` is mainly used for performing an action on each element.

---

# MERN Importance

These methods are used heavily in React and Node.js development.

Especially remember:

```text
map()
filter()
reduce()
find()
```

They are essential when handling data received from APIs and databases.
