////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step) {
  let resultArray = [];
  if (!step) {
    step = 1;
    
  }
  if (start < end && step > 0) {
    while (start < end + 1) {
      resultArray.push(start);
      start += step;
      
    }
    
  } else if (start > end && step < 0) {
    while (start > end - 1) {
      resultArray.push(start);
      start += step;
      
    }
    
  } else {
    return resultArray;
    
  }
  return resultArray;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;

}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  let newReversedArray = [];
  for (let i = 0; i < array.length; i++) {
    newReversedArray.unshift(array[i]);
  }
  return newReversedArray;

}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  let placeholder;
  for (let i = 0; i < array.length / 2; i++) {
		placeholder = array[i];
		array[i] = array[array.length - 1 - i];
		array[array.length - 1 - i] = placeholder;
		
	}

}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  // last object.rest should === null
  // object.value should === index + 1 => 0 should be 1
  // *************************************************
  // 
  let list = {};
  for (let i = array.length - 1; i > -1; i--) {
    if (i === array.length - 1) {
      list.value = array[i];
      list.rest = null;
      
    } else {
      list = {value: array[i], rest: list};
      
    }
    
  }
  return list;
  
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  let resultArray = [];
  for (let testList = list; testList; testList = testList.rest) {
    resultArray.push(testList.value);
    
  }
  return resultArray;
  
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(element, list) {
  let listArray = listToArray(list);
  listArray.unshift(element);
  return arrayToList(listArray);

}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, num) {
  let listArray = listToArray(list);
  if (listArray[num]) {
    return listArray[num];
  }
  return undefined;
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    if (Array.isArray(value)) {
        return 'array';
    } else if (value === null) {
        return 'null';
    } else if (value instanceof Date) {
        return 'date';
    } else {
        return typeof value;
    }
}

function compareArrays(array1, array2) {
// this will compare all elements in 2 arrays
// returns true if lengths are the same and every element matches
// returns false otherwise
	// compare lengths
	if (array1.length !== array2.length) {
		return false;
	}
	// compare elements of arrays
	for (let i = 0; i < array1.length; i++) {
		if (array1[i] !== array2[i]) {
			return false;
		}
	}
	// lengths are the same and elements are the same
	return true;
}


function compareObjects(obj1, obj2) {
	// compare keys
	let obj1Keys = Object.keys(obj1);
	let obj2Keys = Object.keys(obj2);
	if (!compareArrays(obj1Keys, obj2Keys)) {
		return false;
	}
	// keys are the same
	// compare objects
	for (let key in obj1) {
		// value is object
		if (typeOf(obj1[key]) === 'object') {
			if (!compareObjects(obj1[key], obj2[key])) {
				return false;
			}
		} else if (typeOf(obj1[key]) === 'array') {
			if (!compareArrays(obj1[key], obj2[key])) {
				return false;
			}
		} else if (obj1[key] !== obj2[key]) {
			return false;
		}
	}
	return true;
}

function deepEqual(thing1, thing2) {
  // create variables to hold thing type strings
	let thing1Type = typeOf(thing1);
	let thing2Type = typeOf(thing2);
	// if thing types are different, return false
	if (thing1Type !== thing2Type) {
		return false;
	}
	// compare arrays
	// if both things are arrays:
	if (thing1Type === 'array' && thing2Type === 'array') {
	  return compareArrays(thing1, thing2);
	}


	// compare objects
	if (typeOf(thing1) === 'object' && typeOf(thing2) === 'object') {
		return compareObjects(thing1, thing2);
	}
	// same type, not objects or arrays
	return thing1 === thing2;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
