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
