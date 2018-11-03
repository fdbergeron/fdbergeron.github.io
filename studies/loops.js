/**
 * Loops
 * 
 * 
 * Loops are used to control the process of performing the same action
 * repeatedly. This includes iterating over collections.
 * 
 * 
 * While loops
 * 
 * A While loop runs as long as its condition evaluates to true. Once the condition 
 * evaluates to false, the next code block will run.
 
 let count = 0;
 while (count < 11) {
     console.log(count);
     count++;
 }
 
 * This loop sets <count> to 0, then logs each number from 0 through 10. This
 * loop depends on the value of <count>: once the condition evaluates to false, 
 * the loop stops.
 
 let count = 10;
 while (count > -1) {
  console.log(count);
  count--;
 }
 
 * This loop logs each number from 10 to 0 backwards.
 * 
 * 
 * For loops
 * 
 * A For loop is useful for iterating over collections. We control the loop 
 * by providing three pieces of information inside the condition:
 * 
 * for (starting point; ending condition; iteration) {code block}
 * 
 * Starting point: The initial value of the iterator variable. This is the 
 * reference for the first element that the loop will act upon.
 * 
 * Ending condition: As long as this evaluates to true, the code block will run.
 * Once this evaluates to false, the loop stops.
 * 
 * Iteration: The change to the value of the iterator variable for each time the
 * code block runs. 
 
 let cats = ['Milly', 'Daisy', 'Sister', 'Alice', 'Mamacat', 'Babycat', 'Lulu'];
 
 for (let index = 0; index < cats.length; index++) {
  console.log(cats[index]);
 }
 
 * This loop logs each element of array <cats>. 
 
 for (let index = cats.length - 1; index > -1; index--) {
  console.log(cats[index]);
 }
 
 * This loop logs each element of array <cats> in reverse order.
 * 
 * 
 * For In loops
 * 
 * A For In loop is used to iterate over collection objects. The code block runs 
 * once for each key-value pair in the object:
 * 
 * for (key in object) {code block}
 * 
 * Key: Simply a new variable that holds the current key value for each iteration
 * of the loop. Does not have to be "key".
 * 
 * Object: Should be the variable that references the collection object that will
 * be looped over.
 
 let student = {name: 'Frank', age: 45, friends: ['Gaby', 'Milly']};
 
 for (let key in student) {
  console.log(student[key]);
 }
 
 * This loop logs each value of collection object <student>.
 * 
 * 
 * Infinite loops
 * 
 let count = 0;
 while (count > -1) {
  console.log('This never stops');
  count++;
 }
 
 * If a loop is set up without a definite endpoint, an infinite loop occurs.
 * This will crash the browser. To avoid this, it's important to make sure that
 * the ending condition can eventually evaluate to true.
 */