/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function search(animals, name) {
    for (let index = 0; index < animals.length; index++) {
        if (animals[index].name === name) {
            return animals[index];
        }
    }
    return null;
}



//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(animals, name, replacement) {
    for (let index = 0; index < animals.length; index++) {
        if (animals[index].name === name) {
            animals[index] = replacement;
        }
    }
}



//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(animals, name) {
    for (let index = 0; index < animals.length; index++) {
        if (animals[index].name === name) {
            animals.splice(index, 1);
        }
    }
}



//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(animals, animal) {
    // if (animal.name.length && animal.species.length) {
    //     for (let index = 0; index < animals.length; index++) {
    //         if (animals[index].name === animal.name) {
    //             return null;
    //         }
    //     }
    //     animals.push(animal);
    // }
    // if either animal.name or animal.species have no length, stop function
    if (!animal.name.length || !animal.species.length) {
        return null;
    // otherwise, make sure that animal.name isn't the same as one of the animals
    // already there - if it is, stop function
    } else {
        for (let index = 0; index < animals.length; index++) {
            if (animals[index].name === animal.name) {
                return null;
            }
        }
        // once the loop is done, push animal into the animals array
        animals.push(animal);
    }
}




/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
