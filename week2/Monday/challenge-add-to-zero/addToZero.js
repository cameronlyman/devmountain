"use strict";
const { performance } = require('perf_hooks');
// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// THIS IS FOR MY PERSONAL TESTING FOR PERFORMANCE
// let array = [];
// for (let i = 0; i < 100000; i ++) {
//     array.push(Math.random());
// }
// Write your solution below:

// Measure performance
let startTime = performance.now();

// SOLUTION 1
// Make all the numbers positive and then remove duplicates. If duplicates are removed, then 2 numbers add to zero.
console.log(array.length !== new Set(array.map(value => Math.abs(value))).size);

// Log time
let endTime = performance.now();
console.log((endTime - startTime) + " ms");

// SOLUTION 2
// Use loops to find the solution
startTime = performance.now();
// console.log(checkSolution2(array));

// Log time
endTime = performance.now();
console.log((endTime - startTime) + " ms");

function checkSolution2(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            if (array[i] + array[j] === 0) {
                return true;
            }
        }
    }

    // No values found
    return false;
}



// SOLUTION 3
// Sort the array first to make it faster then use recursion
startTime = performance.now();
// console.log(checkSolution3(array));

// Log time
endTime = performance.now();
console.log((endTime - startTime) + "ms");


function checkSolution3(array) {
    return doTheCheck(array.sort());
}

function doTheCheck(array) {
    // No more numbers to check. Return false.
    if (array.length <= 1) {
        return false;
    }

    let i = 1; // Start at second element
    // If the next element is greater than it's therotical mirror, then break the while loop.
    while (Math.abs(array[0]) >= array[i]) {
        if (array[0] + array[i] === 0) {
            return true; // A number has been found
        }
        i++; // Increment index
    }
    return doTheCheck(array.slice(1)); // Check the other part of the array
}

// SOLUTION 4
// Make all nums positive, then sort. If two adjacent numbers are the same, then it's a solution

startTime = performance.now();
console.log(checkSolution4(array));

// Log time
endTime = performance.now();
console.log((endTime - startTime) + "ms");

function checkSolution4(array) {
    let sortedArray = array.map((value) => Math.abs(value)).sort();

    const end = sortedArray.length;
    let i = 0;
    let j = 1;

    while (j < end) {
        // If two adjacent numbers are the same, then there is a solution.
        if (array[i] === array[j]) {
            return true;
        }

        // Increment indexes
        i++;
        j++;
    }

    return false; // No number found
}

// Timing results for array size 7:
// Solution 1: 4.065 ms
// Solution 2: 0.218 ms
// Solution 3: 0.235 ms
// Solution 4: 0.246 ms

// 1000
// Solution 1: 4.275 ms
// Solution 2: 3.261 ms
// Solution 3: 3.949 ms
// Solution 4: 0.955 ms

// 10000
// Solution 1: 6.321 ms
// Solution 2: 36.150 ms
// Solution 3: [max stack size reached]
// Solution 4: 9.971 ms

// 100000
// Solution 1: 23.705 ms
// Solution 2: 3286.519 ms
// Solution 3: ----------
// Solution 4: 170.698 ms

// A million
// Solution 1: 325.52 ms
// Solution 2: [heap out of memory]
// Solution 3: ------------------
// Solution 4: 2925.870 ms

// Ten million
// Solution 1: 5509.102 ms
// Solution 2: ------------------
// Solution 3: ------------------
// Solution 4: 43280.480 ms