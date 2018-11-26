/**
 * Variables
 * 
 * Variables are containers used to hold values such as simple and complex datatypes
 * as well as functions. After assignment, these values can be accessed and
 * manipulated by referencing their variables.
 * 
 * Variables can be declared:
 */
 
 var number;
 console.log(number); //== "undefined"
 
 /** Here, the variable <number> exists, but its value is undefined.
 * 
 * Variables can be assigned a value upon creation:
 */
 
 var letter = 'F';
 
 /** Here, the variable <letter> has been created with an immediate value of 'F'.
 * 
 * 
 * Variables are created using either the var, let, or const keywords:
 */
 
 var frankAge = 45;
 let cat = {name: 'Milly', age: 10, likes: ['treats', 'catnip', 'sunshine']};
 const printCatLikes = function() {
  console.log(cat.likes);
};

/** Variables created using the var keyword are function-scoped and hoisted. Only
* the variable's declaration is hoisted; its value is not assigned until that 
* line of code actually runs:
*/

console.log(x); //==> "undefined"
var x = 'hoisted';
console.log(x); //==> "hoisted"

/** Here, <x>'s declaration on the second line is hoisted, but not its value.
 */

function test() {
  var y = 'inside';
  console.log(y);
}
test(); //==> "inside"
// console.log(y); //==> "ReferenceError: x is not defined"

/** In this case, <y> is accessible inside function <test>, but not outside of it.
* If <y> is declared outside of the function, its value in that context will be
* different:
*/

function test2() {
  var z = 'inside';
  console.log(z);
}
test2(); //==> "inside"
console.log(z); //==> "undefined"
var z = 'outside';
console.log(z); //==> "outside"

/** Variables created using the let keyword are block-scoped and are not hoisted.
* These variables can be reassigned to different values after declaration.
*/

frankAge = 45;
if (frankAge === 45) {
  let old = true;
}
// console.log(old); //==> "ReferenceError: old is not defined"

/** Here, <frankAge> is created using the let keyword. It is then accessed in the
* if-statement's child scope. Because the condition is true, <old> is then created
* inside that block. Because variables created with "let" are block-scoped, though,
* we don't have access to <old> in the parent scope.
* 
* Variables created using the const keyword are block-scoped and are not hoisted.
* These variables cannot be reassigned to different values:
*/

const num = 1;
// num = 2; //==> Throws an error/doesn't work
