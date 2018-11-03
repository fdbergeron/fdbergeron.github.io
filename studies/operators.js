/**
 * Operators
 * 
 * 
 * Arithmetic operators
 * 
 * 
 * Arithmetic operators are used to perform math computations on their operands and
 * return a value:
 * 
 * Addition '+' Returns the sum of its operands:
 console.log(1 + 1); ==> 2
 
 * Subtraction '-' Returns the difference of its operands:
 console.log(1 - 1); ==> 0
 
 * Multiplication '*' Returns the product of its operands:
 console.log(2 * 2); ==> 4
 
 * Division '/' Returns the quotient of its operands:
 console.log(2 / 2); ==> 1
 
 * Remainder '%' Returns the remainder of a quotient:
 console.log(4 % 3); ==> 1
 
 * Exponentiation '**' Returns the result of raising the left operand to the power
 * of the right operand:
 console.log(2 ** 3); ==> 8
 
 * Increment '++' Returns the result of adding one to the operand. This operator
 * can only be used on a variable:
 let num = 1;
 num++
 console.log(num++); ==> 2
 
 * Decrement '--' Returns the result of subtracting one from the operand. This operator
 * can only be used on a variable:
 num--;
 console.log(num); ==> 1
 
 
 * Assignment operators
 * 
 * Assignment operators are used to make the operand on the left (a variable) equal
 * to the operand on the right. 
 * 
 * Assignment '=' Simply assigns the right-hand value to the left-hand operand:
 let one;
 one = 1;
 console.log(one); ==> 1
 
 * Addition assignment '+=' Makes the value of the left-hand operand equal to
 * itself plus the right-hand value:
 one += 1;
 console.log(one); ==> 2
 
 * Subtraction assignment '-=' Makes the value of the left-hand operand equal to
 * itself minus the right-hand value:
 one -= 1;
 console.log(one); ==> 1
 
 * Multiplication assignment '*=' Makes the value of the left-hand operand equal
 * to the product of itself and the right-hand operand:
 one *= 3;
 console.log(one); ==> 3
  
 * Division assignment '/=': Makes the value of the left-hand operand equal to
 * itself divided by the right-hand operand:
 one /= 2;
 console.log(one); ==> 1.5
 
 * The remainder assignment operator '%=' and exponentiation assignment operator 
 * '**=' can be used in the same way:
 let three = 3;
 three %= 2;
 console.log(three); ==> 1
 let two = 2;
 two **= 3;
 console.log(two); ==> 8
 
 
 * Comparison operators
 * 
 * Comparison operators are used to determine truthiness in conditional statements.
 *
 * Strict equality '===' Evaluates to true if the two operands are of the same type
 * and value:
 console.log(1 === 1); ==> true
 console.log(1 === '1'); ==> false
 
 * Strict nonequality '!==' Changes the evaluation to the opposite Boolean value:
 console.log(1 !== 1); ==> false
 console.log( 1 !== '1'); ==> true
 
 * Equality '==' If the operands are not of the same type, Javascript will attempt 
 * to evaluate the truthiness of the content regardless:
 console.log('1' == 1); ==> true
 
 * Less than '<' Evaluates to true if the left operand's numeric value is less 
 * than the right's:
 console.log(1 < 2); ==> true
 console.log(2 < 1); ==> false
 
 * Greater than '>' Evaluates to true if the left operand's numeric value is greater 
 * than the right's:
 console.log(1 > 2); ==> false
 console.log(2 > 1); ==> true
 
 * A single equal sign after the less than or greater than operator adds an 'or 
 * equal to' condition:
 console.log(1 >= 1); ==> true
 console.log(1 <= 1); ==> true
 
 
 * Logical operators
 * 
 * Logical operators are used to add or change conditions.
 * 
 * And '&&' Used when we want to base code flow on the truthiness of more than one
 * condition:
 let x = 1;
 if (x > 0 && x !== 1) {
     console.log('Positive, but not one')
 } else  if (x > 0) {
     console.log('One!')
 } ==> "One!"
 
 * Or '||' Used when we want to base code flow on the truthiness of only one of
 * more than one conditions:
 
let z = 11;
if (z < 10 || z > 10) {
	console.log('Not 10');
} else {
	console.log('10');
} ==> "Not 10"


* Ternary operator
* 
* The ternary operator acts on three operands: a condition, a truthy action, and 
* a falsey action:

1 > 2 ? console.log('One is greater than two') : console.log('One is less than two');
==> "One is less than two"


* Unary operators
* 
* Unary operators act on only one operand.
* 
* Bang operator '!' Changes a value's truthiness to its opposite:
console.log(!true) ==> false

* typeof Returns a string describing the data type of its operand:
console.log(typeof 10); ==> "number"
console.log(typeof 'string'); ==> "string"

 */