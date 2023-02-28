"use strict";

// Starting array
let array = [28, 43, -12, 30, 4, 0, -36]

// Write your solution below:
let smallest;
let largest;

// Verify array has something in it
if (array.length > 0) {
    // Set inital values
    smallest = array[0];
    largest = array[0];
}

for (let num in array) {
    if (num < smallest) {
        smallest = num;
    }

    if (num > largest) {
        largest = num;
    }
}

// Print the results
console.log("Smallest: " + smallest);
console.log("Largest: " + largest);