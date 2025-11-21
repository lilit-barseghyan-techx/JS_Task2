////////////////////////////////////////
// Part A: Utilities Library (Functions)
///////////////////////////////////////

// Function Declarations

function add(a, b) {
  return a + b;
}

function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

// Test calls for Function Declarations
console.log("Function Declarations");
console.log("Result of add:", add(5, 10));
console.log("Result of sumArray:", sumArray([1, 2, 3, 4, 5]));

// Function Expressions

const capitalize = function (text) {
  if (typeof text !== "string") return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
};

const reverseString = function (text) {
  let reversed = "";
  for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i];
  }
  return reversed;
};

// Test calls for Function Expressions
console.log("\nFunction Expressions");
console.log("Capitalized 'lilit':", capitalize("lilit"));
console.log("Capitalized 'hello world':", capitalize("hello world"));
console.log("Reversed 'hello':", reverseString("hello"));
console.log("Reversed 'JavaScript':", reverseString("JavaScript"));

// Arrow Functions

const isEven = (number) => number % 2 === 0;

const lastElement = (array) => array[array.length - 1];

// Test calls for Arrow Functions
console.log("\nArrow Functions");
console.log("Is 4 even?:", isEven(4));
console.log("Last element of [1,2,3,4]:", lastElement([1, 2, 3, 4]));

//////////////////////////////////////
// Part B: Scope Simulation & Analysis
//////////////////////////////////////

// Global Scope
let globalVar = "I am global"; // Accessible everywhere
console.log("globalVar:", globalVar);
console.log("\n");

// Function Scope
function FuncScope() {
  // Function-level variables
  var functionVar = "I am function scoped var";
  let functionLet = "I am function scoped let";
  const functionConst = "I am function scoped const";

  // Block-level variables
  if (true) {
    var blockVar = "I am block scoped (var)";
    let blockLet = "I am block scoped (let)";
    const blockConst = "I am block scoped (const)";

    console.log("Inside block:");
    console.log("globalVar:", globalVar); // Global variables are always visible
    console.log("functionVar:", functionVar); // Function-level variable visible inside block so they're accessible
    console.log("functionLet:", functionLet); // Function-level variable visible inside block
    console.log("functionConst:", functionConst);
    console.log("blockLet:", blockLet); // Block-level variables visible inside the block
    console.log("blockConst:", blockConst);
    console.log("\n");
  }

  console.log("Outside block (inside function):");
  console.log("globalVar:", globalVar);
  console.log("functionVar:", functionVar);
  console.log("functionLet:", functionLet);
  console.log("functionConst:", functionConst);
  // console.log(blockLet);   // Not accessible: declared in block
  // console.log(blockConst); // Not accessible: declared in block
  console.log(blockVar); // VAr is accessible outside of block
  console.log("\n");

  // Nested Function
  function nestedFunction() {
    console.log("Inside nested function:");
    console.log("globalVar:", globalVar);
    console.log("functionVar:", functionVar); // Nested function can see parent function variables
    console.log("functionLet:", functionLet);
    console.log("functionConst:", functionConst);
    // console.log(blockLet);   // Not accessible: block variable outside nested function
    // console.log(blockConst); // Not accessible: block variable outside nested function
    console.log("\n");
  }

  nestedFunction();
}

FuncScope();

// Outside Function
console.log("Outside function:");
console.log("globalVar:", globalVar);
// console.log(functionVar); // Not accessible: function variable not visible outside
// console.log(functionLet);
// console.log(functionConst);
// console.log(blockLet);    // Not accessible: block variable
// console.log(blockConst);

/////////////////////////////////////////////
// Part C: Hoisting & Temporal Dead Zone (TDZ)
/////////////////////////////////////////////

console.log("Variable Hoisting");

// VAR: hoisted and initialized as undefined
console.log("varVar before declaration:", varVar); // undefined
var varVar = 10;
console.log("varVar after declaration:", varVar); // 10

// LET: hoisted but in TDZ → ReferenceError if accessed before declaration
let letVar = 20;
console.log("letVar after declaration:", letVar); // 20

// CONST: hoisted but in TDZ → ReferenceError if accessed before declaration
const constVar = 30;
console.log("constVar after declaration:", constVar); // 30

console.log("\n Function Hoisting");

// Function declaration: hoisted, can call before declaration
console.log("sum(2,3) before declaration:", sum(2, 3)); // 5
function sum(a, b) {
  return a + b;
}

// Function expression with var: var is hoisted as undefined : TypeError if called before assignment
var multiply = function (a, b) {
  return a * b;
};
console.log("multiply(2,3) after declaration:", multiply(2, 3)); // 6

// Function expression with let/const: not hoisted (TDZ) → ReferenceError if called before declaration
const divide = (a, b) => a / b;
console.log("divide(6,2) after declaration:", divide(6, 2)); // 3

//Summary
/*
var declarations are hoisted and start as undefined, so we can access them before the line, but the value is undefined.
let and const are hoisted too, but they’re in a “temporal dead zone” until their declaration, and using them early gives a ReferenceError.
Function declarations are fully hoisted, so we can call them before they appear in the code.
Function expressions with var are hoisted as undefined, and calling them before assignment causes a TypeError.
Function expressions with let or const behave like let/const variables and give a ReferenceError if used before declaration.
*/
