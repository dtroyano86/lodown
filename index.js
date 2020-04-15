'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: Returns the given value unchanged.
 * 
 * @param {Value} value: Input value can be any datatype.
 * 
 * @return {Value}: The value returned will be the same as the input value unaltered
 * 
 */
function identity(value) {
    return value;
}
module.export.identity = identity;

/**
 * typeOf: Returns the type of the given value in a string, more specific than the 
 * built in typeof method
 * 
 * @param {Value} value: Input value can be any datatype
 * 
 * @return {String} final: Returns a string that is the type of the given value
 */

function typeOf(value) {
    let final = typeof (value);
    if (final === 'object') {
        if (Array.isArray(value)) {
            final = 'array';
        } else if (value === null) {
            final = 'null';
        } else if (value instanceof Function) {
            final = 'function';
        }
    }
    return final;
}
module.exports.typeOf = typeOf;

/**
 * first: Takes an array and a number and returns a given number of elements
 * starting from the begining of the array. If no array is given it returns an
 * empty array. 
 *
 * @param {Array} arr: An array full of elements to be returned
 * @param {Number} num: The amount of elements to be returned
 * 
 * @return {Array, Value}: Returns an empty array if arr isn't an array, Returns
 * the first element of arr if the num isn't valid or is 1, or Returns an array
 * of elements equal to the given number
 */

function first(arr, num) {
    if (Array.isArray(arr)) {
        if (typeof num === 'number') {
            if (num === 1) {
                return arr[0];
            }
            let final = [];
            for (let i = 0; i < num; i++) {
                if (arr[i] !== undefined) {
                    final.push(arr[i]);
                }
            }
            return final;
        }
        return arr[0];
    }
    return [];
}
module.exports.first = first;

/**
 * first: Takes an array and a number and returns a given number of elements
 * starting from the end of the array, and maintaining their original order.
 * If no array is given it returns an empty array. 
 * 
 * @param {Array} arr: An array full of elements to be returned
 * @param {Number} num: The amount of elements to be returned
 * 
 * @return {Array, Value}: Returns an empty array if arr isn't an array, Returns
 * the last element of arr if the num isn't valid or is 1, or Returns an array
 * of elements equal to the given number
 */

function last(arr, num) {
    if (Array.isArray(arr)) {
        if (typeof num === 'number') {
            if (num === 1) {
                return arr[arr.length - 1];
            }
            let final = [];
            for (let i = 1; i <= num; i++) {
                if (arr[arr.length - i] !== undefined) {
                    final.unshift(arr[arr.length - i]);
                }
            }
            return final;
        }
        return arr[arr.length - 1];
    }
    return [];
}
module.exports.last = last;

/**
 * indexOf: Takes an array and a value and returns the index of the first
 * occurrence of the given value in the array and -1 if it isn't found.
 * 
 * @param {Array} arr: An array to be searched
 * @param {Value} value: An datatype to be looked for
 * 
 * @return {Number}: The index of the given value in the array or -1 if
 * it isn't found.
 */

function indexOf(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        } else if (i === arr.length - 1) {
            return -1;
        }
    }
}
module.exports.indexOf = indexOf;

/**
 * contains: Uses the ternary operator to return true of false if the given
 * value is found in the given array
 * 
 * @param {Array} arr: Array to be searched
 * @param {Value} value: Any datatype to be looked for
 * 
 * @return {Boolean}: True if value is in array or false if it isn't
 */

function contains(arr, value) {
    return (arr.indexOf(value) !== -1) ? true : false;
}
module.exports.contains = contains;

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * unique: Takes an array and returns an array with all duplicates removed
 * 
 * @param {Array} arr: Array to remove duplicates from
 * 
 * @return {Array}: arr without duplicates
 */

function unique(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === indexOf(arr, arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
module.exports.unique = unique;

/**
 * filter: Calls the given function on each element in the given array and
 * returns a new array of elements that passed true
 * 
 * @param {Array} arr: Array of elements to be tested
 * @param {Function} func: Function that returns True/False 
 * 
 * @return {Array}: Elements that returned true on the test
 */

function filter(arr, func) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr) === true) {
            result.push(arr[i]);
        }
    }
    return result;
}
module.exports.filter = filter;

/**
 * reject: Calls the given function on each element in the given array and
 * returns a new array of elements that returned false
 * 
 * @param {Array} arr: Array of elements to be tested
 * @param {Function} func: Function that returns True/False
 * 
 * @return {Array}: Elements that returned false on the test
 */

function reject(arr, func) {
    let result = [];
    let filterArray = filter(arr, func);
    for (let i = 0; i < arr.length; i++) {
        if (!contains(filterArray, arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
module.exports.reject = reject;

/**
 * partition: Returns an array of arrays. One array is elements that returned true
 * from the given func and the other is ones that returned false.
 * 
 * @param {Array} arr: Array of elements to be split
 * @param {Function} func: (element, key, arr)
 * 
 * @return {Array}: Elements that returned true, Elements that returned false
 */

function partition(arr, func) {
    return [
        arr.filter(function (x, i) { return func(x, i, arr); }),
        arr.filter((x, i) => !func(x, i, arr))
    ];
}
module.exports.partition = partition;

/**
 * map: Calls a function on each element in a collection and returns an array
 * of the results of the function
 * 
 * @param {Array, Object} coll: Array or Object to be passed
 * @param {Function} func: (value, key(index), coll)
 * 
 * @return {Array}: the results of running the function on all the elements
 */

function map(coll, func) {
    let result = [];
    if (Array.isArray(coll)) {
        for (let i = 0; i < coll.length; i++) {
            result.push(func(coll[i], i, coll));
        }
    } else {
        for (let key in coll) {
            result.push(func(coll[key], key, coll));
        }
    }
    return result;
}
module.exports.map = map;

/**
 * pluck: Looks through an array of objects for a given key, and returns
 * an array of those values
 * 
 * @param {Array} arr: Array of objects to be searched
 * @param {String} prop: Property name to be located
 * 
 * @return {Array}: Array of prop values
 */
function pluck(arr, prop) {
    return map(arr, (elem, id, coll) => elem[prop]);
}
module.exports.pluck = pluck;

/**
 * every: Checks every element in a collection against a function that returns true/false
 * and only returns true if every element returns true
 * 
 * @param {Object, Array} coll: Collection to be tested
 * @param {Function} func: Function that returns a boolean
 * 
 * @return {Boolean}: True if  the tests were true otherwise false 
 */

function every(coll, func) {
    if (func instanceof Function) {
        for (let key in coll) {
            if (!func(coll[key], key, coll)) {
                return false;
            }
        }
    } else {
        for (let key in coll) {
            if (!coll[key]) {
                return false;
            }
        }
    }
    return true;
}
module.exports.every = every;

/**
 * some: Checks every element in a collection against a function that returns true/false
 * and returns true if any element returns true
 * 
 * @param {Object, Array} coll: Collection to be tested
 * @param {Function} func: Function that returns a boolean
 * 
 * @return {Boolean}: True if any of the tests were true otherwise false 
 */

function some(coll, func) {
    if (func instanceof Function) {
        for (let key in coll) {
            if (func(coll[key], key, coll)) {
                return true;
            }
        }
    } else {
        for (let key in coll) {
            if (coll[key]) {
                return true;
            }
        }
    }
    return false;
}
module.exports.some = some;

/**
 * reduce: Applies a transformation to each element in an array using the results of the previous element's
 * transformation (or starting with a given seed) as an input
 * 
 * @param {Array} arr: Array to be transformed
 * @param {Function} func: (previousResult(seed), currentElement, Index)
 * @param {Value} seed: Starting value
 * 
 * @returns {Value}: The singular combined result
 */

function reduce(arr, func, seed) {
    let prevResult = seed === undefined ? arr[0] : seed;
    for (let i = (seed === undefined ? 1 : 0); i < arr.length; i++) {
        prevResult = func(prevResult, arr[i], i);
        if (i === arr.length - 1) {
            return prevResult;
        }
    }
}
module.exports.reduce = reduce;

/**
 * extend: Takes any number of objects and assigns all of the properties of each othem to the first object
 * 
 * @param  {Objects} objs: Any number of objects to be condensed
 * 
 * @returns {Object}: First object that contains the keys and properties of all the others
 */

function extend(...objs) {
    for (let i = 1; i < objs.length; i++) {
        for (let key in objs[i]) {
            objs[0][key] = objs[i][key];
        }
    }
    return objs[0];
}