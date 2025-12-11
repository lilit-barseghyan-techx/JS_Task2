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

console.log("\n /// Variable Hoisting ///");

// VAR: Hoisted and initialized as undefined 
try {
  console.log("varVar before declaration:", varVar); // undefined
} catch (error) {
  console.log("varVar before declaration threw:", error.name);
}

var varVar = 10;
console.log("varVar after declaration:", varVar);
console.log("\n");

// LET: Hoisted but in TDZ (ReferenceError)
try {
  console.log("letVar before declaration:", letVar);
} catch (error) {
  console.log("letVar before declaration threw:", error.name); // ReferenceError
}

let letVar = 20;
console.log("letVar after declaration:", letVar);
console.log("\n");

// CONST: Hoisted but in TDZ (ReferenceError)
try {
  console.log("constVar before declaration:", constVar);
} catch (error) {
  console.log("constVar before declaration threw:", error.name); // ReferenceError
}

const constVar = 30;
console.log("constVar after declaration:", constVar);
console.log("\n");


console.log("/// Function Hoisting ///");

// Function declaration: fully hoisted
try {
  console.log("sumBefore(2,3) before declaration:", sumBefore(2, 3));
} catch (error) {
  console.log("sumBefore before declaration threw:", error.name);
}

function sumBefore(a, b) {
  return a + b;
}
console.log("sumBefore after declaration:", sumBefore(2, 3));
console.log("\n");


// Function expression with var: var hoisted as undefined  TypeError
try {
  console.log("multiplyBefore(2,3) before declaration:", multiplyBefore(2, 3));
} catch (error) {
  console.log("multiplyBefore before declaration threw:", error.name); // TypeError
}

var multiplyBefore = function (a, b) {
  return a * b;
};

console.log("multiplyBefore after declaration:", multiplyBefore(2, 3));
console.log("\n");


// Function expression with let: in TDZ ReferenceError
try {
  console.log("subtractBefore(5,2) before declaration:", subtractBefore(5, 2));
} catch (error) {
  console.log("subtractBefore before declaration threw:", error.name); // ReferenceError
}

let subtractBefore = (a, b) => a - b;

console.log("subtractBefore after declaration:", subtractBefore(5, 2));
console.log("\n");


// Function expression with const: in TDZ ReferenceError
try {
  console.log("divideBefore(6,2) before declaration:", divideBefore(6, 2));
} catch (error) {
  console.log("divideBefore before declaration threw:", error.name); // ReferenceError
}

const divideBefore = (a, b) => a / b;

console.log("divideBefore after declaration:", divideBefore(6, 2));
console.log("\n");


// SUMMARY
/*
var → hoisted, initialized to undefined, so no error before declaration.
let → hoisted but in TDZ → accessing early throws ReferenceError.
const → same as let, but must be assigned at declaration → ReferenceError.
Function declarations → fully hoisted → can be called before declaration.
Function expressions with var → var hoisted as undefined → calling gives TypeError.
Function expressions with let/const → TDZ → ReferenceError before declaration.
*/