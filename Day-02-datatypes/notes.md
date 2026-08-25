# JavaScript Datatypes - Notes

## What is a Datatype?

A datatype tells us **what type of value** a variable is storing.

Example:

```javascript
let name = "Achind";
let age = 18;
```

Here:

* `name` stores a String.
* `age` stores a Number.

---

# 1. Primitive Datatypes

Primitive means **simple/basic values**.

JavaScript has 7 primitive datatypes.

### String

Used to store text.

```javascript
let name = "Achind";
```

### Number

Used to store numbers.

```javascript
let age = 18;
let price = 99.50;
```

### Boolean

Used for `true` or `false`.

```javascript
let isStudent = true;
```

### Undefined

A variable is created but no value is given.

```javascript
let city;
```

Value is `undefined`.

### Null

Means **intentionally empty**.

```javascript
let address = null;
```

### BigInt

Used for very large numbers.

```javascript
let number = 12345678901234567890n;
```

The `n` at the end makes it a BigInt.

### Symbol

Used to create a unique value.

```javascript
let id = Symbol("id");
```

---

# 2. Non-Primitive Datatypes

Non-primitive datatypes can store **multiple values or more complex data**.

### Object

Stores data in `key : value` pairs.

```javascript
let student = {
    name: "Achind",
    age: 18
};
```

Here:

* `name` → key
* `"Achind"` → value
* `age` → key
* `18` → value

### Array

Used to store multiple values in one variable.

```javascript
let fruits = ["Apple", "Mango", "Banana"];
```

---

# typeof

`typeof` is used to check the datatype of a value.

```javascript
let age = 18;

console.log(typeof age);
```

Output:

```text
number
```

Another example:

```javascript
let name = "Achind";

console.log(typeof name);
```

Output:

```text
string
```

---

# Easy Way to Remember

## Primitive

**S N B U N B S**

* String
* Number
* Boolean
* Undefined
* Null
* BigInt
* Symbol

## Non-Primitive

* Object
* Array

---

# Important

`Array` is technically an **object** in JavaScript.

```javascript
typeof [];
```

gives:

```text
object
```

Also, JavaScript has a famous special case:

```javascript
typeof null
```

gives:

```text
object
```

This is an old JavaScript behavior.

---

# My Main Understanding

**Primitive = simple single value**

**Non-Primitive = collection/complex data**

I should first understand the difference between primitive and non-primitive instead of trying to memorize everything.
