/**
 * String Manipulation
 * 
 * 
 * Operators
 * 
 * We can concatenate strings using the + operator. Numbers added this way become
 * part of the string:
 
 console.log('Hello' + ' ' + 'World'); ==> "Hello World"
 
 let frank = 'Frank';
 let is = 'is';
 let age = 45;
 let period = '.';
 let space = ' ';
 let string = frank + space + is + space + age + period;
 console.log(string); ==> "Frank is 45."
 
 * We can also use the += operator to concatenate strings:
 
 let game = 'Dark Souls';
 let difficulty = 'hard';
 game += ' is ' + difficulty + '.';
 console.log(game); ==> "Dark Souls is hard."
 
 * String methods
 * 
 * .concat takes the strings to be added as its argument(s) and returns a new
 * string consisting of all of the strings combined into one:
 
 let first = 'frank';
 let last = 'beeezy';
 console.log(first.concat(' ', last)); ==> "frank beeezy"

 * .slice takes the starting index of the first character to be removed as its
 * first argument and the index after the last character to be removed as its 
 * second argument. It returns a new string consisting of these characters:
 
 console.log(first.slice(0, 1); ==> "f"
 console.log(first.slice(1, first.length)) ==> "rank"
 
 * .split takes a string as its argument and returns an array consisting of the 
 * original string with its elements separated. The argument will not be included
 * as an element of the array, and each element will be separated by the argument's
 * position in the original string:
 
 console.log(first.split('')); ==> ["f", "r", "a", "n", "k"]
 console.log(first.split('r')); ==> ["f", "ank"]
 
 * .substring takes an index as its argument and returns a new string consisting of
 * the character at that position through the end of the original string. If a 
 * second index is passed in, the new string will end with the character before
 * that index:
 
 console.log(first.substring(1); ==> "rank"
 console.log(first.substring(1, first.length - 1); => "ran"
 */