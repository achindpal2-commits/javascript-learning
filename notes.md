# JavaScript Strings - Day 6 Notes

## 1. What is a String?

A string is used to store **text**.

```javascript
let name = "Achind";
```

Strings can be written using:

```javascript
"Hello"
'Hello'
`Hello`
```

---

# String Methods

## 2. length

Finds the number of characters.

```javascript
let word = "Hello";

console.log(word.length);
```

Output:

```text
5
```

### Structure

```javascript
string.length
```

---

## 3. toUpperCase()

Converts text into uppercase.

```javascript
let name = "achind";

console.log(name.toUpperCase());
```

Output:

```text
ACHIND
```

### Structure

```javascript
string.toUpperCase()
```

---

## 4. toLowerCase()

Converts text into lowercase.

```javascript
let name = "ACHIND";

console.log(name.toLowerCase());
```

Output:

```text
achind
```

### Structure

```javascript
string.toLowerCase()
```

---

## 5. trim()

Removes spaces from the beginning and end.

```javascript
let name = "   Achind   ";

console.log(name.trim());
```

Output:

```text
Achind
```

### Structure

```javascript
string.trim()
```

---

## 6. includes()

Checks whether a string contains something.

Returns:

```text
true
false
```

Example:

```javascript
let message = "I am learning JavaScript";

console.log(message.includes("JavaScript"));
```

Output:

```text
true
```

### Structure

```javascript
string.includes(searchValue)
```

---

## 7. startsWith()

Checks whether a string starts with a particular value.

```javascript
let website = "https://github.com";

console.log(website.startsWith("https"));
```

Output:

```text
true
```

### Structure

```javascript
string.startsWith(searchValue)
```

---

## 8. endsWith()

Checks whether a string ends with a particular value.

```javascript
let file = "script.js";

console.log(file.endsWith(".js"));
```

Output:

```text
true
```

### Structure

```javascript
string.endsWith(searchValue)
```

---

## 9. indexOf()

Finds the position of a value.

```javascript
let text = "I love JavaScript";

console.log(text.indexOf("love"));
```

The position starts from `0`.

### Structure

```javascript
string.indexOf(searchValue)
```

If the value does not exist, it returns:

```text
-1
```

---

## 10. lastIndexOf()

Finds the position of the **last occurrence**.

```javascript
let text = "apple banana apple";

console.log(text.lastIndexOf("apple"));
```

### Structure

```javascript
string.lastIndexOf(searchValue)
```

---

## 11. charAt()

Gets a character at a specific position.

```javascript
let name = "Achind";

console.log(name.charAt(0));
```

Output:

```text
A
```

### Structure

```javascript
string.charAt(index)
```

---

## 12. at()

Gets a character using an index.

```javascript
let name = "Achind";

console.log(name.at(0));
console.log(name.at(-1));
```

Output:

```text
A
d
```

The useful part of `at()` is that it supports negative indexes.

### Structure

```javascript
string.at(index)
```

---

## 13. slice()

Extracts part of a string.

```javascript
let language = "JavaScript";

console.log(language.slice(0, 4));
```

Output:

```text
Java
```

### Structure

```javascript
string.slice(start, end)
```

The `end` position is not included.

---

## 14. substring()

Extracts part of a string.

```javascript
let language = "JavaScript";

console.log(language.substring(0, 4));
```

Output:

```text
Java
```

### Structure

```javascript
string.substring(start, end)
```

---

## 15. replace()

Replaces the **first matching** value.

```javascript
let text = "I like JavaScript. JavaScript is fun.";

console.log(text.replace("JavaScript", "Python"));
```

Only the first `JavaScript` is replaced.

### Structure

```javascript
string.replace(oldValue, newValue)
```

---

## 16. replaceAll()

Replaces **all matching** values.

```javascript
let text = "JavaScript is fun. JavaScript is powerful.";

console.log(text.replaceAll("JavaScript", "JS"));
```

### Structure

```javascript
string.replaceAll(oldValue, newValue)
```

---

## 17. concat()

Joins strings together.

```javascript
let firstName = "Achind";
let lastName = "Pal";

console.log(firstName.concat(" ", lastName));
```

Output:

```text
Achind Pal
```

### Structure

```javascript
string.concat(string2)
```

In modern JavaScript, template literals are often easier:

```javascript
let fullName = `${firstName} ${lastName}`;
```

---

## 18. repeat()

Repeats a string a certain number of times.

```javascript
let star = "*";

console.log(star.repeat(5));
```

Output:

```text
*****
```

### Structure

```javascript
string.repeat(count)
```

---

## 19. padStart()

Adds characters to the beginning.

```javascript
let number = "25";

console.log(number.padStart(5, "0"));
```

Output:

```text
00025
```

### Structure

```javascript
string.padStart(targetLength, padString)
```

---

## 20. padEnd()

Adds characters to the end.

```javascript
let number = "25";

console.log(number.padEnd(5, "0"));
```

Output:

```text
25000
```

### Structure

```javascript
string.padEnd(targetLength, padString)
```

---

## 21. split()

Converts a string into an array.

```javascript
let skills = "HTML,CSS,JavaScript";

console.log(skills.split(","));
```

Output:

```text
["HTML", "CSS", "JavaScript"]
```

### Structure

```javascript
string.split(separator)
```

This method is very important because it connects **strings with arrays**.

---

## 22. String()

Converts another value into a string.

```javascript
let age = 21;

let result = String(age);

console.log(result);
console.log(typeof result);
```

Output:

```text
21
string
```

### Structure

```javascript
String(value)
```

---

## 23. charCodeAt()

Returns the Unicode number of a character.

```javascript
let letter = "A";

console.log(letter.charCodeAt(0));
```

Output:

```text
65
```

### Structure

```javascript
string.charCodeAt(index)
```

This is useful to know, but it is less important for beginner-level everyday coding.

---

## 24. codePointAt()

Returns the Unicode code point of a character.

```javascript
let symbol = "😀";

console.log(symbol.codePointAt(0));
```

This is more useful when working with Unicode characters and emojis.

### Structure

```javascript
string.codePointAt(index)
```

---

# Important String Method Cheat Sheet

| Method          | Purpose                 |
| --------------- | ----------------------- |
| `length`        | Count characters        |
| `toUpperCase()` | Make uppercase          |
| `toLowerCase()` | Make lowercase          |
| `trim()`        | Remove outer spaces     |
| `includes()`    | Check if text exists    |
| `startsWith()`  | Check beginning         |
| `endsWith()`    | Check ending            |
| `indexOf()`     | Find first position     |
| `lastIndexOf()` | Find last position      |
| `charAt()`      | Get character           |
| `at()`          | Get character by index  |
| `slice()`       | Extract part            |
| `substring()`   | Extract part            |
| `replace()`     | Replace first match     |
| `replaceAll()`  | Replace all matches     |
| `concat()`      | Join strings            |
| `repeat()`      | Repeat text             |
| `padStart()`    | Add text at beginning   |
| `padEnd()`      | Add text at end         |
| `split()`       | Convert string to array |
| `String()`      | Convert value to string |
| `charCodeAt()`  | Get Unicode value       |
| `codePointAt()` | Get Unicode code point  |
