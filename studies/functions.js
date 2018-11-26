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
 */
 
 function add(x, y) {
     return x + y;
 }
 
 /** Here, x and y are the function's parameters. These are the values that the 
 * function needs in order for the code block, or body of the function, to return
 * an actual value. When the function is called (see below), the values passed in
 * in place of <x> and <y> are called arguments.
 *
 * The variable <add> is now assigned to the function. When a function is created
 * with a declaration, its value is hoisted, meaning that the function's body 
 * 
 * This is a function expression:
 */
 
 const subtract = function(x, y) {
     return x - y;
 };
 
 /** When a function is created with an expression, its value is not hoisted.
 * 
 * We can also create arrow functions:
 */
 
 const multiply = (x, y) => {
     return x * y;
 };
 
 /** Arrow functions' values are also not hoisted.
 * 
 * 
 * To use a function, we "call," or "invoke" it:
 */
 
 let twoTimesThree = multiply(2,3);
 
 console.log(twoTimesThree); //==> 6
 
 
 /** Function scope
 * 
 * Variables declared inside of a function body are not accessible from a parent
 * or global scope.
 */
 
 function sayHi() {
  let hi = 'HI';
  console.log(hi);
 }
 
 sayHi(); // -> "HI"
 // console.log(hi);  -> ReferenceError: hi is not defined
 
 /** However, these variables are accessible from a child scope.
  */
 
 function sayHi() {
  let hi = 'HI';
	 function sayHiMilly() {
	  hi += ' Milly';
	  
	 }
	 
	sayHiMilly();
	console.log(hi);
 }

 sayHi(); // -> "HI Milly"
 // sayHiMilly(); --> ReferenceError: sayHiMilly is not defined
 
 /** Here, <hi> is accessible inside the child function <sayHiMilly>, but not in the
 * global scope.
 * 
 * Also, in the above example, <sayHiMilly> is considered a "closure," or a function 
 * that has access to variables outside of its own scope.
 */