// Variable and Data Types
//1. Declare Variables
// Declare variables for a person's name, age, height, and whether 
// they are employed. Assign appropriate TypeScript types.
let person = "Earl";
let age = 26;
let height = 1.69;
let isEmployed = true;

let person1:String = "Earl";
let age1:number = 26;
let height1:number = 1.69;
let isEmployed1:boolean = true;

//2. String Concatenation
// Create two variables, firstName and lastName. Combine them into a full name and print it.
let firstName = "Earl";
let lastName = "Gabriel";

console.log(firstName + " " + lastName);

// 3. Type Conversion
// Convert the string "150" into a number and add 50 to it.
const str = "150";
let num: number = parseInt(str);
console.log(num + 50);

//4. Calculate Age
// Create a function that accepts a birth year and returns the person's approximate age using the current year.
function calculateAge(birthYear: number){
    let age: number = new Date().getFullYear() - birthYear;
    console.log(age);
    return age;
}

calculateAge(2000);

//5. Calculate Rectangle Area
// Create a function that accepts width and height and returns the rectangle's area.
function calculateRectangleArea(width:number, height:number){
    const area:number = width * height;
    console.log(area);
    return area;
}

calculateRectangleArea(10, 20);

// 6. Temperature Conversion
// Convert Celsius to Fahrenheit.
// Formula: (Celsius * 9/5) + 32
function convertCelsiustoFahrenheit(celsius:number){
    const Fahrenheit:number = (celsius * 9/5) + 32;
    console.log(Fahrenheit);
    return Fahrenheit;
}

convertCelsiustoFahrenheit(36.5);

// 7. Calculate Total Price
// Create variables for product price and quantity. Calculate the total purchase amount.
function calculateTotalPrice(price:number, quantity: number){
    const totalPrice = price * quantity;
    console.log(totalPrice);
    return totalPrice;
} 

let price = 99.99;
let quantity = 5;
calculateTotalPrice(price, quantity)

// 8. Calculate Remaining Balance
// Given a starting balance and an expense, calculate the remaining balance.
function calculateRemainingBalance(startingBalance: number, expenses:number){
    if(startingBalance >= expenses){
        let remainingBalance = startingBalance - expenses;
        return remainingBalance;
    } else {
        return 0;
    }
    
}

let startingBalance = 100;
let expenses = 99;
console.log(calculateRemainingBalance(startingBalance, expenses));

// 9. Swap Variables
// Swap the values of two variables without directly assigning their literal values again.
let value1 = 10;
let value2 = 20;
let temp; 
temp = value1;
value1 = value2;
value2 = temp;

console.log(`Value of value 1 is ${value1} and value of value 2 is ${value2}`);

// 10. Check Data Types
// Declare five variables with different data types and print their types using typeof.
let name1 = "Kratos";
let age2 = 2000;
let isAlive = true;
let invalid = null;
let unknown;

console.log(typeof(name1));
console.log(typeof(age2));
console.log(typeof(isAlive));
console.log(typeof(invalid));
console.log(typeof(unknown));

// Part 2 – Operators and Conditions
// Problems 11–20 · Arithmetic, comparison and conditional statements
// 11. Even or Odd
// Create a function that determines whether a number is even or odd.
function isOddOrEven(num: number){
    if(num % 2 === 0){
        return `The number ${num} is an even number`
    } 
    else if(num % 2 === 1){
        return `The number ${num} is an odd number`
    } else {
        return `The number is neither odd nor even number`
    }
}

console.log(isOddOrEven(2))

// 12. Positive or Negative
// Determine whether a number is positive, negative, or zero.
function isPositiveNegative(num:number){
    if(num > 0){
        return `The number ${num} is positive`
    } else if(num < 0){
        return `The number ${num} is negative`
    } else {
       return `The number is zero`;
    }
}

console.log(isPositiveNegative(-1));

// 13. Find the Largest Number
// Accept three numbers and return the largest.
function returnLargestNumber(
    num1: number,
    num2: number,
    num3: number
): number {
    let numbers: number[] = [num1, num2, num3];

    let highestValue = numbers[0];

    for (const num of numbers) {
        if (num > highestValue) {
            highestValue = num;
        }
    }

    return highestValue;
}

console.log(returnLargestNumber(5,8,6));

// 14. Age Eligibility
// Check whether a person is eligible to vote. Assume the minimum age is 18.
const isGreaterThanOne = (num: number): boolean => num >= 18;

console.log(isGreaterThanOne(18));

// 15. Grade Classification
/*
Accept a numerical grade and return:
- 90–100: Excellent
- 80–89: Very Good
- 75–79: Passed
- Below 75: Failed
*/

function classifyGrades(grade: number){
    if(grade >= 90 && grade <= 100){
        return "Excellent"
    } 
    else if (grade >= 80 && grade <= 89){
        return "Very Good"
    }
    else if (grade >= 75 && grade <= 79){
        return "Passed"
    }
    else if (grade < 75){
        return "Failed"
    } 
    else{
        return `Grade is not possible`
    }
}

console.log(classifyGrades(101));

// 16. Login Validation
// Accept a username and password. Return "Login Successful" only when both match the expected credentials.

const storedUser = "admin";
const storedPass = "12345";

function loginValidation(username: string, password: string): string {
    if (storedUser === username && storedPass === password) {
        return "Login Successful";
    } else {
        return "Login Failed"; // ✅ Handles the failure case correctly
    }
}

console.log(loginValidation("admin", "12345"));

// 17. Divisibility Checker
// Check whether a number is divisible by both 3 and 5.
function divisibleByThreeOrFive(num: number){
    if(num % 3 == 0 && num % 5 == 0){
        return true;
    } else {
        return false
    }
}

console.log(divisibleByThreeOrFive(16));

// 18. Discount Calculator
// Apply a 10% discount if the purchase amount is at least ₱1,000. Otherwise, return the original amount.
function discountCalculator(purchaseAmount: number){
    if(1000 <= purchaseAmount) {
        return purchaseAmount = purchaseAmount * .90;
    } else {
        return purchaseAmount;
    }
}

console.log(discountCalculator(999));

// 19. Leap Year Checker
// Create a function that determines whether a year is a leap year.
function leapYearChecker(year: number): boolean {
    return year % 400 === 0 ||
        (year % 4 === 0 && year % 100 !== 0);
}

console.log(leapYearChecker(1999));

type Operators = "+" | "-" | "*" | "/";

// 20. Simple Calculator
// Create a function that accepts two numbers and an operator (+, -, *, /) and returns the result. Handle division by zero.
function simpleCalculator(
    num1: number,
    num2: number,
    operator: Operators
): number | string {
    switch (operator) {
        case "+":
            return num1 + num2;

        case "-":
            return num1 - num2;

        case "*":
            return num1 * num2;

        case "/":
            if (num2 === 0) {
                return "Cannot divide by zero";
            }
            return num1 / num2;

        default:
            return "Invalid Operator";
    }
}

console.log(simpleCalculator(5,2, "/"));

// 21. Print Numbers
// Print numbers from 1 to 100 using a loop.
console.log("21. Print Numbers")
for(let i = 1; i <= 100; i++ ){
    console.log(i);
}

//22.  Even Numbers
// Print all even numbers from 1 to 50.
console.log("22. Even Numbers")
for(let i = 1; i <=50; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

// 23. Sum of Numbers
// Calculate the sum of all numbers from 1 to 100.
console.log("Sum of Numbers")
let total = 0;
for(let i = 1; i<=100; i++){
    total += i;
}
console.log(total);

// 24. Multiplication Table
// Generate a multiplication table for a given number from 1 to 10.
console.log("24. Multiplication Table");
function multiplicationTable(num: number){
    for(let i = 1; i <=10; i++){
        console.log(`${num} x ${i} = ${num*i}`);
    }
}

multiplicationTable(6);

// 25. Factorial
// Calculate the factorial of a given number.
console.log("25. Factorial")
function calculateFactorial(num: number){
    let factorial = 1;
    for(let i = 1; i <= num; i++){
        factorial = factorial * i;
    }
    console.log(factorial)
}

calculateFactorial(10);

// 26 . Count Digits
// Count how many digits are in a given positive integer.
function countDigits(num: number){
    for(let i = 0; i < num; i++){

    }
}

// 27. Reverse a number
// Reverse the digits of a number.
// Example: 12345 becomes 54321.
function reverseNumber(not: number){
    // 1. Handle the sign separately so it doesn't end up at the end of the string
  const isNegative = n < 0;
  
  // 2. Convert the absolute number to a string
  const absStr = Math.abs(n).toString();
  
  // 3. Split into an array of characters, reverse it, and join it back
  const reversedStr = absStr.split("").reverse().join("");
  
  // 4. Reapply the negative sign if it was originally negative
  return isNegative ? `-${reversedStr}` : reversedStr;
}