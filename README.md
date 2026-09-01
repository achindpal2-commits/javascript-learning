# Day 6 - JavaScript Strings

This is **Day 6** of my JavaScript learning journey.

Today I learned and practiced **JavaScript Strings and String Methods** from a beginner level.

## Topics Covered

* Creating strings
* `length`
* `toUpperCase()`
* `toLowerCase()`
* `trim()`
* `includes()`
* `startsWith()`
* `endsWith()`
* `indexOf()`
* `lastIndexOf()`
* `charAt()`
* `at()`
* `slice()`
* `substring()`
* `replace()`
* `replaceAll()`
* `concat()`
* `repeat()`
* `padStart()`
* `padEnd()`
* `split()`
* `String()`
* `charCodeAt()`
* `codePointAt()`

## Real-World Practice

I also practiced strings using examples such as:

* Cleaning user input
* Checking an email
* Checking file extensions
* Validating usernames
* Searching products
* Hiding a phone number
* Extracting file extensions
* Creating a full name

## What I Learned

Strings are used whenever we work with text.

For example:

```javascript
let name = "Achind";
let email = "achind@gmail.com";
let message = "Hello World";
```

String methods help us **search, modify, check, extract, and work with text**.

## Example

```javascript
let username = "   ACHIND   ";

let cleanName = username.trim().toLowerCase();

console.log(cleanName);
```

Output:

```text
achind
```

## Key Learning

One important thing I learned today is that **most string methods do not change the original string**. They return a new value.

Example:

```javascript
let name = "achind";

let result = name.toUpperCase();

console.log(result);
```

Output:

```text
ACHIND
```

## Files

* `script.js` - String practice code
* `notes.md` - String notes and syntax

## Day 6 Status
