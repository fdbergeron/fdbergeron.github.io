/**
 * Datatypes
 * 
 * 
 * 
 * Simple Datatypes
 * 
 * 
 * Numbers
 * 
 * Numbers are symbolic representations of quantities. 
 * 
 * 
 * Strings
 * 
 * Strings are characters enclosed in single- or double-quotes in order to indicate
 * that they should be interpreted or read as text rather than code.
 * 
 * 
 * Booleans
 * 
 * A Boolean is simply true or false.
 * 
 * 
 * Undefined
 * 
 * The value of a declared variable that has not yet been assigned another value.
 * 
 * 
 * NaN
 * 
 * NaN (not a number) is the value assigned to math evaluations that result in an
 * imaginary number or a number that does not exist. Examples: 0 / 0, the square
 * root of a negative number. 
 * 
 * 
 * Infinity and -Infinity
 * 
 * Infinity is a value that will always be greater than any other number. Negative
 * infinity is a value that will always be less than any other number.
 * 
 * 
 * Null
 * 
 * Null is used to indicate an absence of any other value.
 * 
 * 
 * Complex datatypes
 * 
 * Arrays
 * 
 * Arrays are collections of values arranged in a zero-indexed list. Arrays are 
 * indicated with brackets. Array values are accessed using the index number in 
 * bracket notation:
 */
 
 let numbers = [1, 2, 3, 4, 5];
 
 console.log(numbers[0]); // ==> 1
 console.log(numbers[0] + numbers[4]); //==> 6
 
 /** 
 * Objects
 * 
 * Objects are collections of key-value pairs contained inside curly braces. 
 * Object values are accessed using either dot- or bracket notation:
 */
 
 let student = {name: 'Frank', age: 45, friends: ['Gaby', 'Milly', 'Mills']};
 
 console.log(student.name); //==> "Frank"
 console.log(student['age']); //==> 45
 
 let x = 'friends';
 console.log(student[x][1]); //==> "Milly"
 
 /**
 * Functions
 * 
 * Functions are blocks of code that can be assigned to variables and reused.
 */
 
 function sayHi(nameString) {
  console.log('Hi, ' + nameString + '!');
 }
 
 sayHi('Milly'); // ==> "Hi, Milly!" 
  
 /** Simple vs. complex datatypes
 * 
 * Simple datatypes are immutable and are referenced by value. Each simple datatype
 * is a single value that cannot be changed. Complex datatypes are mutable and
 * are stored by reference. Complex datatypes can be referenced by more than 
 * one variable.
 */
 
 let letters = ['a', 'b', 'c', 'd'];
 let alphabet = letters;
 alphabet.push('e');
 console.log(letters[letters.length - 1]); //==> "e"
 
 let letter = 'f';
 let initial = letter;
 letter = 'z';
 console.log(initial); //==> "f"
 console.log(letter); //==> "z"