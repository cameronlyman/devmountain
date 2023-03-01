"use strict";
let word = 'moose';

console.log(hasMoreVowels(word));

function hasMoreVowels(word) {

    const vowelList = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;
    for (let x of word.toLowerCase()) {
        if (vowelList.includes(x)) {
            vowelCount++;
        }

    }

    if (vowelCount > word.length /2) {
        return true;
    }

    return false;
}
