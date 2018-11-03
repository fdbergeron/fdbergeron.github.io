/**
 * Control Flow
 * 
 * 
 * 
 * Control flow is the process by which we use conditional statements to determine
 * which blocks of code should run. 
 * 
 * 
 * If statements
 * 
 * In an if statement, if the condition evaluates to true, the following block of 
 * code will run. We place the condition inside parentheses, followed by its 
 * paired code block:
 * 
 * if (condition) {code block}
 
 let frank = 45;
 if (frank > 40) {
     console.log('OLD');
 } ==> "OLD"
 
 *
 * Else statements
 * 
 * When the If statement evaluates to false, we can use an Else statement to run
 * a corresponding code block instead of doing nothing:
 
 let milly = 10;
 if (milly > 40) {
     console.log('OLD');
 } else {
     console.log('YOUNG');
 } ==> "YOUNG"
 
 * Else-if statments
 * 
 * If we have a series of conditions to check, we can use else-if statements:
 
 let number = 10;
 if (number < 10) {
     console.log('This is a small number.');
 } else if (number === 10) {
     console.log('This number is 10.');
 } else {
     console.log('This is a large number.');
 } ==> "This number is 10."
 
 *
 * Switch statements
 * 
 * We can use switch statements to check for specific variables to run corresponding
 * code blocks, followed by a default block:
 
 let season = 'summer';

switch(season) {
  case 'winter':
  case 'autumn':
  case 'fall':
    console.log('Cool!');
    break;
  case 'summer':
  case 'spring':
    console.log('Hot!');
    break;
  default:
    console.log('Not a season!');
    break;
} ==> Hot!
 */