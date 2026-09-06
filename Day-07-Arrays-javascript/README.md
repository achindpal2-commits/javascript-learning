# Day - JavaScript Arrays

## 📌 Topic

**JavaScript Arrays and Array Methods**

Arrays are one of the most important concepts in JavaScript.

An array is used to store **multiple values inside a single variable**.

---

## 🎯 What I Learned

In this topic, I learned:

* What is an array?
* Why do we use arrays?
* How to create an array
* How to access array elements
* Array indexing
* Array length
* How to modify array elements
* Array methods
* `push()`
* `pop()`
* `shift()`
* `unshift()`
* `includes()`
* `indexOf()`
* `join()`
* `slice()`
* `splice()`
* `forEach()`
* `map()`
* `filter()`
* `reduce()`
* `find()`
* `findIndex()`
* `some()`
* `every()`
* `sort()`
* `reverse()`
* `concat()`

---

## 📚 What is an Array?

An array is a collection of multiple values stored in one variable.

### Example

```javascript
let fruits = ["Apple", "Banana", "Mango"];
```

Instead of creating separate variables:

```javascript
let fruit1 = "Apple";
let fruit2 = "Banana";
let fruit3 = "Mango";
```

We can use:

```javascript
let fruits = ["Apple", "Banana", "Mango"];
```

---

## 🔢 Array Index

JavaScript arrays use **zero-based indexing**.

That means the first element has index `0`.

```javascript
let fruits = ["Apple", "Banana", "Mango"];
```

| Element | Index |
| ------- | ----: |
| Apple   |     0 |
| Banana  |     1 |
| Mango   |     2 |

Accessing elements:

```javascript
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
```

Output:

```text
Apple
Banana
Mango
```

---

# 📏 length

The `length` property tells us how many elements are present.

```javascript
let numbers = [10, 20, 30, 40];

console.log(numbers.length);
```

Output:

```text
4
```

---

# 🔧 Basic Array Methods

## 1. push()

Adds an element at the end.

```javascript
let fruits = ["Apple", "Banana"];

fruits.push("Mango");

console.log(fruits);
```

Output:

```text
["Apple", "Banana", "Mango"]
```

---

## 2. pop()

Removes the last element.

```javascript
fruits.pop();
```

---

## 3. unshift()

Adds an element at the beginning.

```javascript
fruits.unshift("Orange");
```

---

## 4. shift()

Removes the first element.

```javascript
fruits.shift();
```

---

## 5. includes()

Checks whether an element exists.

```javascript
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.includes("Mango"));
```

Output:

```text
true
```

---

## 6. indexOf()

Returns the index of an element.

```javascript
console.log(fruits.indexOf("Banana"));
```

Output:

```text
1
```

---

## 7. join()

Converts an array into a string.

```javascript
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.join(", "));
```

Output:

```text
Apple, Banana, Mango
```

---

# ✂️ slice()

`slice()` extracts a portion of an array.

```javascript
let numbers = [10, 20, 30, 40, 50];

let result = numbers.slice(1, 4);

console.log(result);
```

Output:

```text
[20, 30, 40]
```

Important:

`slice()` does **not** change the original array.

---

# ✂️ splice()

`splice()` can add or remove elements.

```javascript
let numbers = [10, 20, 30, 40];

numbers.splice(1, 1);

console.log(numbers);
```

The element at index `1` is removed.

---

# 🔄 forEach()

`forEach()` is used to perform an operation for every element.

```javascript
let numbers = [10, 20, 30];

numbers.forEach(number => {
    console.log(number);
});
```

Output:

```text
10
20
30
```

`forEach()` does not normally create a new array.

---

# 🔄 map()

`map()` creates a **new array** by transforming every element.

```javascript
let numbers = [1, 2, 3, 4];

let squares = numbers.map(number => number * number);

console.log(squares);
```

Output:

```text
[1, 4, 9, 16]
```

### Remember:

**map = transform**

---

# 🔍 filter()

`filter()` creates a new array containing elements that satisfy a condition.

```javascript
let numbers = [10, 15, 20, 25, 30];

let evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers);
```

Output:

```text
[10, 20, 30]
```

### Remember:

**filter = select**

---

# ➕ reduce()

`reduce()` reduces an array into a single value.

```javascript
let numbers = [10, 20, 30, 40];

let total = numbers.reduce((sum, number) => {
    return sum + number;
}, 0);

console.log(total);
```

Output:

```text
100
```

### Remember:

**reduce = combine**

---

# 🔎 find()

`find()` returns the **first element** that satisfies a condition.

```javascript
let numbers = [10, 20, 30, 40];

let result = numbers.find(number => number > 25);

console.log(result);
```

Output:

```text
30
```

---

# 🔎 findIndex()

Returns the index of the first matching element.

```javascript
let numbers = [10, 20, 30, 40];

let index = numbers.findIndex(number => number > 25);

console.log(index);
```

Output:

```text
2
```

---

# ❓ some()

Checks whether **at least one** element satisfies a condition.

```javascript
let numbers = [10, 20, 30, 40];

console.log(numbers.some(number => number > 35));
```

Output:

```text
true
```

### Remember:

**some = at least one**

---

# ✅ every()

Checks whether **all** elements satisfy a condition.

```javascript
let numbers = [10, 20, 30, 40];

console.log(numbers.every(number => number > 0));
```

Output:

```text
true
```

### Remember:

**every = all**

---

# 🔤 sort()

Used to sort elements.

For numbers, use a comparison function.

### Ascending

```javascript
let numbers = [50, 10, 30, 20];

numbers.sort((a, b) => a - b);

console.log(numbers);
```

Output:

```text
[10, 20, 30, 50]
```

### Descending

```javascript
numbers.sort((a, b) => b - a);
```

---

# 🔄 reverse()

Reverses the array.

```javascript
let letters = ["A", "B", "C"];

letters.reverse();

console.log(letters);
```

Output:

```text
["C", "B", "A"]
```

---

# 🔗 concat()

Combines arrays.

```javascript
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let result = arr1.concat(arr2);

console.log(result);
```

Output:

```text
[1, 2, 3, 4, 5, 6]
```

---

# ⭐ Most Important Methods

For beginner-level JavaScript and MERN development, focus especially on:

```text
forEach()
map()
filter()
reduce()
find()
findIndex()
some()
every()
sort()
```

---

# 🧠 Easy Way to Remember

| Method        | Main Purpose                      |
| ------------- | --------------------------------- |
| `forEach()`   | Perform operation on each element |
| `map()`       | Transform every element           |
| `filter()`    | Select matching elements          |
| `reduce()`    | Convert array into one value      |
| `find()`      | Find first matching element       |
| `findIndex()` | Find index of first match         |
| `some()`      | Check if at least one matches     |
| `every()`     | Check if all match                |
| `sort()`      | Sort elements                     |
| `reverse()`   | Reverse array                     |

---

## 🚀 Connection to MERN

Arrays are extremely important in MERN development.

You will frequently use:

```javascript
map()
filter()
find()
reduce()
```

especially when working with:

* API data
* MongoDB data
* React components
* Lists
* Products
* Users
* Orders
* Shopping carts

---

## 🏆 Day Goal

By the end of this topic, I should be able to:

* Create arrays
* Access array elements
* Modify arrays
* Add and remove elements
* Loop through arrays
* Transform arrays using `map()`
* Filter arrays using `filter()`
* Calculate values using `reduce()`
* Search arrays using `find()`
* Check conditions using `some()` and `every()`
* Sort arrays
* Combine arrays

**Next Topic:** JavaScript Objects
