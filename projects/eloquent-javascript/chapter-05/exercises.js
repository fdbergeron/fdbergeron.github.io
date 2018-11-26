// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(arrayOfArrays) {
  let flattenedArray = arrayOfArrays.reduce((accumulatorArray, currentElement) => {
    return accumulatorArray.concat(currentElement);
    
  }, []);
  return flattenedArray;
  
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(value, testFunc, updateFunc, bodyFunc) {
  if (testFunc(value) === false) {
    return;
  }
  bodyFunc(value);
  return loop(updateFunc(value), testFunc, updateFunc, bodyFunc);
}

/**
 * Write a higher-order function loop that provides something like a for loop 
 * statement. It takes a value, a test function, an update function, and a body 
 * function. Each iteration, it first runs the test function on the current loop 
 * value and stops if that returns false. Then it calls the body function, giving 
 * it the current value. Finally, it calls the update function to create a new 
 * value and starts from the beginning.

When defining the function, you can use a regular loop to do the actual looping.
 */

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
  for (let i = 0; i < array.length; i++) {
    if (!test(array[i])) {
      return false;
    }
  }
  return true;
  
  
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(string) {

  // //loop all characters in array
  let scripts = countBy(string, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : 'none';
  });
  scripts.sort((a,b) => {
    return b.count - a.count;
  });
  return scripts[0].name;
  

}


// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
