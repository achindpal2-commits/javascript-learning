# JavaScript Strings - Notes

## What is a String?

A String is a sequence of characters used to store text.

```javascript
let name = "Achind";
```

Strings can be created using:

```javascript
"Hello"
'Hello'
`Hello`
```

## Important String Properties and Methods

### `length`

Returns the number of characters.

```javascript
let text = "Hello";
console.log(text.length); // 5
```

### Accessing Characters

```javascript
let text = "Hello";

console.log(text[0]); // H
console.log(text[4]); // o
```

### `charAt()`

Returns the character at a specific position.

```javascript
console.log("Hello".charAt(1)); // e
```

### `toUpperCase()`

Converts a string to uppercase.

```javascript
console.log("hello".toUpperCase());
```

### `toLowerCase()`

Converts a string to lowercase.

```javascript
console.log("HELLO".toLowerCase());
```

### `includes()`

Checks whether a string contains specific text.

```javascript
console.log("JavaScript".includes("Script")); // true
```

### `startsWith()`

Checks whether a string starts with specific text.

```javascript
console.log("JavaScript".startsWith("Java")); // true
```

### `endsWith()`

Checks whether a string ends with specific text.

```javascript
console.log("JavaScript".endsWith("Script")); // true
```

### `trim()`

Removes spaces from both sides.

```javascript
let name = "  Achind  ";
console.log(name.trim());
```

### `slice()`

Extracts a part of a string.

```javascript
let text = "JavaScript";

console.log(text.slice(0, 4)); // Java
```

### `substring()`

Extracts characters between two positions.

```javascript
console.log("JavaScript".substring(0, 4));
```

### `replace()`

Replaces the first matching text.

```javascript
console.log("I like Java".replace("Java", "JavaScript"));
```

### `replaceAll()`

Replaces all matching text.

```javascript
console.log("Hi Hi Hi".replaceAll("Hi", "Hello"));
```

### `split()`

Converts a string into an array.

```javascript
let fruits = "Apple,Banana,Mango";

console.log(fruits.split(","));
```

### `concat()`

Joins strings together.

```javascript
let a = "Hello";
let b = "World";

console.log(a.concat(" ", b));
```

### `repeat()`

Repeats a string multiple times.

```javascript
console.log("Hi ".repeat(3));
```

### `indexOf()`

Returns the position of the first occurrence.

```javascript
console.log("JavaScript".indexOf("S"));
```

### `lastIndexOf()`

Returns the position of the last occurrence.

```javascript
console.log("JavaScript JavaScript".lastIndexOf("JavaScript"));
```

## Template Literals

Template literals use backticks and allow variables inside `${}`.

```javascript
let name = "Achind";
let age = 18;

console.log(`My name is ${name} and I am ${age} years old.`);
```

## Important Point

Strings are **immutable** in JavaScript.

This means string methods generally do not change the original string. They return a new string.

```javascript
let text = "hello";

let result = text.toUpperCase();

console.log(text);   // hello
console.log(result); // HELLO
```
