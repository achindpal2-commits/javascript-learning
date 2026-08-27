// ==========================================
// DAY 04 - CONDITIONAL STATEMENTS
// JavaScript Learning Journey
// ==========================================


// ==========================================
// 1. IF STATEMENT
// ==========================================

let age = 20;

if (age >= 18) {
    console.log("You are an adult");
}


// ==========================================
// 2. IF...ELSE STATEMENT
// ==========================================

let number = 10;

if (number > 0) {
    console.log("Number is positive");
} else {
    console.log("Number is not positive");
}


// ==========================================
// 3. IF...ELSE IF...ELSE
// ==========================================

let marks = 75;

if (marks >= 90) {
    console.log("Grade A+");
} else if (marks >= 75) {
    console.log("Grade A");
} else if (marks >= 60) {
    console.log("Grade B");
} else if (marks >= 40) {
    console.log("Grade C");
} else {
    console.log("Fail");
}


// ==========================================
// 4. EVEN OR ODD
// ==========================================

let num = 7;

if (num % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}


// ==========================================
// 5. POSITIVE, NEGATIVE OR ZERO
// ==========================================

let value = -5;

if (value > 0) {
    console.log("Positive");
} else if (value < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}


// ==========================================
// 6. CHECK VOTING ELIGIBILITY
// ==========================================

let voterAge = 19;

if (voterAge >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}


// ==========================================
// 7. NESTED IF...ELSE
// ==========================================

let userAge = 20;
let hasID = true;

if (userAge >= 18) {

    if (hasID === true) {
        console.log("You can enter");
    } else {
        console.log("ID is required");
    }

} else {
    console.log("You are under 18");
}


// ==========================================
// 8. CHECK LOGIN
// ==========================================

let isLoggedIn = true;

if (isLoggedIn) {
    console.log("Welcome to your account");
} else {
    console.log("Please login");
}


// ==========================================
// 9. CHECK ADMIN
// ==========================================

let isAdmin = false;

if (isAdmin) {
    console.log("You have admin access");
} else {
    console.log("Access denied");
}


// ==========================================
// 10. USING LOGICAL AND (&&)
// ==========================================

let age1 = 25;
let hasLicense = true;

if (age1 >= 18 && hasLicense === true) {
    console.log("You can drive");
} else {
    console.log("You cannot drive");
}


// ==========================================
// 11. USING LOGICAL OR (||)
// ==========================================

let day = "Sunday";

if (day === "Saturday" || day === "Sunday") {
    console.log("It is the weekend");
} else {
    console.log("It is a weekday");
}


// ==========================================
// 12. USING NOT (!)
// ==========================================

let loggedIn = false;

if (!loggedIn) {
    console.log("User is not logged in");
}


// ==========================================
// 13. TERNARY OPERATOR
// ==========================================

let studentAge = 20;

let result = studentAge >= 18
    ? "Adult"
    : "Minor";

console.log(result);


// ==========================================
// 14. TERNARY - EVEN OR ODD
// ==========================================

let number2 = 12;

let evenOdd = number2 % 2 === 0
    ? "Even"
    : "Odd";

console.log(evenOdd);


// ==========================================
// 15. SWITCH STATEMENT
// ==========================================

let dayNumber = 3;

switch (dayNumber) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day");
}


// ==========================================
// 16. CALCULATOR USING SWITCH
// ==========================================

let a = 10;
let b = 5;
let operator = "+";

switch (operator) {

    case "+":
        console.log(a + b);
        break;

    case "-":
        console.log(a - b);
        break;

    case "*":
        console.log(a * b);
        break;

    case "/":
        console.log(a / b);
        break;

    default:
        console.log("Invalid operator");
}


// ==========================================
// END OF DAY 04
// ==========================================