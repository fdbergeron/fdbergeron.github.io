// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-fdbergeron');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */

var maleCount = function(array) {
    let males = _.filter(array, element => {return element['gender'] === 'male'});
    return males.length;
};

var femaleCount = function(array) {
    return _.reduce(array, function(accumulator, element) {
        if (element.gender === 'female') {
            return accumulator + 1;
        } else {
            return accumulator;
        }
    }, 0);
};

var oldestCustomer = function(array) {
    let oldestName;
    let age = array[0].age;
    _.each(array, function(person) {
        if (person.age > age) {
            oldestName = person.name;
        }
    });
    return oldestName;
};

var youngestCustomer = function(array) {
    let youngestName;
    let age = array[0].age;
    _.each(array, element => {
        if (element.age < age) {
            age = element.age;
            youngestName = element.name;
        }
    });
    return youngestName;
};

var averageBalance = function(array) {
    // get array of balances
		let balances = [];
		_.each(array, person => {balances.push(person.balance);});
		// console.log(balances);
		// remove $ and ,
		let balancesStrings = [];
		_.each(balances, balance => {balancesStrings.push(balance.slice(1,2) + balance.slice(3));});
		// console.log(balancesStrings);
		// convert to numbers
		let balancesNumbers = [];
		_.each(balancesStrings, function(string) {
			balancesNumbers.push(parseFloat(string));
		});
		console.log(balancesNumbers);
		// add balances
		let total = _.reduce(balancesNumbers, function(pr, balance) {
			return pr + balance;
		}, 0);
		return total / balancesNumbers.length;
};

var firstLetterCount = function(array, letter) {
    return _.filter(array, element => {return element.name[0].toLowerCase() === letter.toLowerCase();}).length;
};

var friendFirstLetterCount = function(array, customer, letter) {
	// get friends of customer
	let customerFriendsObjects = [];
	_.each(array, function(person) {
		if (person.name === customer) {
			customerFriendsObjects = person.friends;
		}
	});
	//customerFriendsObjects is an array of <customer>'s friends
	// push name strings into new array
	let customerFriendsNames = [];
	_.each(customerFriendsObjects, function(friend) {
		customerFriendsNames.push(friend.name);
	});
	let namesThatStartWithLetter = _.filter(customerFriendsNames, function(nameString) {
		return nameString[0].toLowerCase() === letter.toLowerCase();
	});
	return namesThatStartWithLetter.length;
};

var friendsCount = function(array, name) {
	// wants an array of names who have <name> in their friends array
	// friends array is at data[index].friends[index].name
	// set array that will be returned
	let resultArray = [];
	// loop over array of people
	// for each person, loop over friends array 
	// if friends[index].name matches name, push friends[index].name into result array
	_.each(array, function(personObject) {
		_.each(personObject.friends, function(friendObject) {
			if (friendObject.name === name) {
				resultArray.push(personObject.name);
			}
		});
	});
	return resultArray;
};

var topThreeTags = function(array) {
	// push list of all occurrences of tag strings into allTags
	// tags are at array[index].tags; this is an array
	let allTags = [];
	_.each(array, function(person) {
		_.each(person.tags, function(tagString) {
			allTags.push(tagString);
		});
	});
	// use reduce to create object {key = tag, value = number of occurrences}
	// seed = {}
	// reduce(allTags, function(accumulatorObject, currentTag){}, {});
	let tagsObject = _.reduce(allTags, function(accumulatorObject, currentTag) {
		// if accumulatorObject.currentTag exists, value = value +1
		// if accumulatorObject.currentTag doesn't exist, accumulatorObject.currentTag = 1
		if (accumulatorObject[currentTag]) {
			accumulatorObject[currentTag]++;
		} else {
			accumulatorObject[currentTag] = 1;
		}
		return accumulatorObject;
	}, {});
	console.log(tagsObject);
	let topThree = [];
	_.each(tagsObject, function(value, key) {
		if (value === 3) {
			topThree.push(key);
		}
	});
	console.log(topThree);
	return topThree;


};

var genderCount = function(array) {
    // use reduce: seed will be object
		// should return accumulator {} with 'gender' keys and number values
		return _.reduce(array, function(accumulator, person) {
			if (accumulator[person.gender]) {
				accumulator[person.gender]++;
			} else {
				accumulator[person.gender] = 1;
			}
			return accumulator;
		}, {});
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
