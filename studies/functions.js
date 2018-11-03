/**
 * Functions
 * 
 * 
 * Functions are blocks of code that can be reused. Functions can be anonymous and
 * they can also be assigned to variables. 
 * 
 * There are several ways to create functions.
 * 
 * This is a function declaration:
 
 function add(x, y) {
     return x + y;
 }
 
 * Here, x and y are the function's parameters. These are the values that the 
 * function needs in order for the code block, or body of the function, to return
 * an actual value. 
 *
 * The variable <add> is now assigned to the function. When a function is created
 * with a declaration, its value is hoisted.
 * 
 * This is a function expression:
 
 const subtract = function(x, y) {
     return x - y;
 }
 
 * When a function is created with an expression, its value is not hoisted.
 * 
 * We can also create arrow functions:
 
 const multiply = (x, y) => {
     return x * y;
 }
 
 * Arrow functions' values are also not hoisted.
 * 
 * 
 * To use a function, we call it:
 
 let twoTimesThree = multiply(2,3);
 console.log(twoTimesThree); ==> 6
 */