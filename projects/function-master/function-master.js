//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    let resultArray = [];
    for (let key in object) {
        resultArray.push(object[key]);
        
    }
    return resultArray;
    
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    let resultArray = [];
    for (let key in object) {
        resultArray.push(key);
    }
    return resultArray.join(' ');

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    let resultArray = [];
    for (let key in object) {
        if (typeof object[key] === 'string') {
            resultArray.push(object[key]);
        }
    }
    return resultArray.join(' ');

}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection) === true) {
        return 'array';
    } else {
        return 'object';
    }
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    let workArray = [];
    for (let index = 0; index < string.length; index++) {
        workArray.push(string[index]);
        
    }
    workArray[0] = workArray[0].toUpperCase();
    return workArray.join('');
    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    let workArray = string.split(' ');
    for (let i = 0; i < workArray.length; i++) {
        workArray[i] = workArray[i].slice(0, 1).toUpperCase() + workArray[i].slice(1);
    }
    return workArray.join(' ');

}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    return 'Welcome ' + capitalizeWord(object.name) + '!';

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    return capitalizeWord(object.name) + ' is a ' + capitalizeWord(object.species);

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    if (!object.noises || !object.noises.length) {
        return 'there are no noises';
    }
    return object.noises.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    let stringArray = string.split(' ');
    for (let i = 0; i < stringArray.length; i++) {
        if (word === stringArray[i]) {
            return true;
        }
    }
    return false;

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name);
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    console.log(object);
    if (!object.friends) {
        return false;
    }
    for (let i = 0; i < object.friends.length; i++) {
        if (object.friends[i] === name) {
            return true;
        }
    }
    return false;

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    let allNames = [];
    let resultArray = [];
    let testObj;
    for (let i = 0; i < array.length; i++) {
        if (array[i].name !== name) {
            allNames.push(array[i].name);
            
        } else {
            testObj = array[i];
        }
    }
    for (let i = 0; i < allNames.length; i++) {
        if (isFriend(allNames[i], testObj) === false) {
            resultArray.push(allNames[i]);
        }
    }
    return resultArray;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object[key] = value;
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
  let keysArray = Object.keys(object);
  for (let i = 0; i < keysArray.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (keysArray[i] === array[j]) {
        delete object[array[j]];
      }
    }
  }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    let resultArray = [];
    for (let i = 0; i < array.length; i++) {
        if (resultArray.indexOf(array[i]) === -1) {
            resultArray.push(array[i]);
        }
    }
    return resultArray;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}