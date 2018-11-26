// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity()
* Arguments:
*   1) Anything
* Objectives:
*   1) Returns <anything> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = (anything) => {
    return anything;
    
};


/** _.typeOf()
* Arguments:
*   1) Anything
* Objectives:
*   1) Return the type of <anything> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = (anything) => {
    if (Array.isArray(anything)) {
        return 'array';
        
    } else if (anything === null) {
        return 'null';
        
    } else if (anything instanceof Date) {
        return 'date';
        
    } else {
        return typeof anything;
        
    }
};


/** _.first()
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Gotchas:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = (array, number) => {
    if (_.typeOf(array) !== 'array' || number < 1) {
        return [];
    }
    if (_.typeOf(number) !== 'number' || number === undefined) {
        return array[0];
    }
    // if (number > array.length) {
    //     return array;
    // }
    // if number is greater than length of array, next line still returns whole
    // array
    return array.slice(0, number);
};



/** _.last()
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Gotchas:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = (array, number) => {
    if (_.typeOf(array) !== 'array' || number < 1) {
        return [];
    }
    if (_.typeOf(number) !== 'number' || number === undefined) {
        return array[array.length - 1];
    }
    if (number > array.length) {
        return array;
    }
    return array.slice(array.length - number);
    
};


/** _.each()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = (collection, func) => {
  if (_.typeOf(collection) === 'array') {
      for (let i = 0; i < collection.length; i++) {
          func(collection[i], i, collection);
      }
      
  } else if (_.typeOf(collection) === 'object') {
      for (let key in collection) {
          func(collection[key], key, collection);
      }
  } else {
      console.log(_.typeOf(collection));
  }
};


/** _.indexOf()
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Gotchas:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = (collection, value) => {
    // for (let i = 0; i < array.length; i++) {
    //     if (array[i] === value) {
    //         return i;
    //     }
    // }
    // return -1;
    // create resultVar
    let result = -1;
    // call each on array, callback should check element = value, if true 
    // set result to index and return 
    _.each(collection, function(element, index) {
        if (element === value && result === -1) {
            result = index;
            
        }
        
    });
    return result;
    
};




/** _.filter()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Gotchas:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = (collection, func) => {
    let resultArray = [];
    // for (let i = 0; i < arr.length; i++) {
    //     if (func(arr[i], i, arr) === true) {
    //         resultArray.push(arr[i]);
    //     }
    // }
    _.each(collection, function(e, i, c) {
        if (func(e, i, c)) {
            resultArray.push(e);
        }
    });
    return resultArray;
};


/** _.reject()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = (collection, func) => {
    let resultArray = [];
    // for (let i = 0; i < arr.length; i++) {
    //     if (func(arr[i], i, arr) === false) {
    //         resultArray.push(arr[i]);
    //     }
    // }
    _.filter(collection, function(e, i, c) {
        if (!func(e, i, collection)) {
            resultArray.push(e);
        }
    });
    
    return resultArray;
    
};


/** _.partition()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Gotchas:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = (collection, func) => {
    ////////////////////////////////////////
    // let tArray = [];
    // let fArray = [];
    // let resultArray = [];
    
    // for (let i = 0; i < array.length; i++) {
    //     if (func(array[i], i, array)) {
    //         tArray.push(array[i]);
    //     }
    //     if (!func(array[i], i, array)) {
    //         fArray.push(array[i]);
    //     }
    // }
    // resultArray[0] = tArray;
    // resultArray[1] = fArray;
    // return resultArray;
    ///////////////////////////////////////
    return [_.filter(collection, func), _.reject(collection, func)];
};


/** _.unique()
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = (array) => {
    //////////////////////////////////////////////////
    let resultArray = [];
    // for (let i = 0; i < arr.length; i++) {
    //     if (_.indexOf(resultArray, arr[i]) === -1) {
    //         resultArray.push(arr[i]);
    //     }
    // }
    _.each(array, function(e, i, c) {
        if (_.indexOf(resultArray, e) === -1) {
            resultArray.push(e);
        }
    });
    return resultArray;
    //////////////////////////////////////////////////
    
    // call indexOf on each element
    
};


/** _.map()
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, its index, <collection>
*        if <collection> is an object:
*            the value, its key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = (collection, func) => {
    let resultArray = [];
    if (_.typeOf(collection) === 'array' || _.typeOf(collection) === 'object') {
        _.each(collection, function(element, indexOrKey, arrayOrObject) {
            resultArray.push(func(element, indexOrKey, arrayOrObject));
        });
    } else {
        return _.typeOf(collection);
    }
    return resultArray;
    
};


/** _.pluck()
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = (arrayOfObjects, prop) => {
    // call map on arrayOfObjects
    // callback should access value at prop of each object (each element of array)
    // return _.map call
    return _.map(arrayOfObjects, function(element, indexOfObject, collection) {
        return element[prop];
    });
};

/** _.contains()
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Gotchas:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = (array, value) => {
    // ternary: condition is the array that filter returns .length
    // return true or false
    return _.filter(array, function(element) {return element === value}).length ? true : false;
};


/** _.every()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Gotchas:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = (collection, func) => {
    // create testArray for <func> call values
    let testArray = [];
    // if <func> is a function, push <func> calls into testArray
    if (_.typeOf(func) === 'function') {
        _.each(collection, function(e, i, c) {
            testArray.push(func(e, i, c));
        });
    } else {
    // if <func> is not a function, evaluate truthiness of elements and push Boolean into testArray
        _.each(collection, function(e, i, c) {
            if (e) {
                testArray.push(true);
            } else {
                testArray.push(false);
            }
        });
    }
    // if _.contains(testArray, false) is truthy, return false, otherwise return true
    return !_.contains(testArray, false);
};


/** _.some()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Gotchas:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = (collection, func) => {
    // create testArray
    let testArray = [];
    // if <func> is a function, push each <func> call into testArray
    if (_.typeOf(func) === 'function') {
        _.each(collection, function(e, i, c) {
           testArray.push(func(e, i, c)); 
        });
        
    } else {
    // if <func> is not a function, evaluate truthiness of each <collection> element/value
    //      and push Bool into testArray
        _.each(collection, function(e, i, c) {
            if (e) {
                testArray.push(true);
            } else {
                testArray.push(false);
            }
        });
    
    }
    // if _.contains(testArray, true) is true, return true
    // default is to return false
    return _.contains(testArray, true);
};


/** _.reduce()
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed>
*   5) After the last iteration, return the return value of the final <function> call
* Gotchas:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = (array, func, seed) => {
    // if no seed is given, use first element of array as seed - start loop on second element of array
    let previousResult;
    if (seed === undefined) {
        previousResult = array[0];
        for (let i = 1; i < array.length; i++) {
            previousResult = func(previousResult, array[i], i);
        }
        
    } else {
        previousResult = seed;
        _.each(array, function(e, i, c) {
            previousResult = func(previousResult, e, i);
        });
    }
    return previousResult;
};


/** _.extend()
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = (...obj) => {
    //loop through array of objects
    for(var i = 1; i < obj.length; i++){
        //for in loop to loop through each object's properties
        for(var key in obj[i]) {
            //update first object's properties using other objects' properties
            obj[0][key] = obj[i][key];
            
        }
        
    }
    return obj[0];
    
};


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
