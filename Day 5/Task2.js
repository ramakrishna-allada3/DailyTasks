// This file contains solutions to problems that are in Arun Prakash's blog. 

// addFive()

function addFive(num) {
    return num + 5;
}

// getopposite()

function getOpposite(num) {
    return (isNaN(num) || (num % 1 != 0)) ? -1 : num*(-1);
}

console.log(getOpposite(-29));

// Convert Minutes to seconds

function toSeconds(minutes) {
    return minutes*60;
}

// function convert string to integer

function toInteger(str) {
    return parseInt(str);
}

console.log(typeof(toInteger("100")));

// addOne()

function addOne(num) {
    return num + 1;
}

console.log(addOne(3));

// Returns the first element on an array

function getFirstElement(arr) {
    return (arr.length > 0) ? arr[0] : null;
    // we can also use the inbuilt method pop which omits the first element of an array.
}

console.log(getFirstElement([100, 2, 3, 4, 5, 6]));

function hoursToSeconds(hours) {
    return hours*3600;
}

console.log(hoursToSeconds(2));

// Finds the perimeter of the rectangle
function findPerimeter(length, breadth) {
    return 2*(length + breadth)
;} 

console.log(findPerimeter(2, 4));

// checks if sum of two given numbers is less than 100
function isSumLessThanHundred(a, b) {
    return a+b < 100;
}
console.log(isSumLessThanHundred(23, 55));

// Remainder function
function remainder(a, b) {
    return a%b;
}
console.log(remainder(3, 4));

// Old macdonald Problem:

// MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
// turkey = 2 legs
// horse = 4 legs
// pigs = 4 legs

function legCount(turkeys, horses, pigs) {
    return 2*turkeys+4*horses+4*pigs;
}
console.log(legCount(2, 1, 1));

// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

function GetFPS(fps, minutes) {
    return 60*fps*minutes;
}

console.log(GetFPS(1, 1));

// Check if an Integer is Divisible By Five
function isDivisibleByFive(number) {
    return (number%5 === 0)
}
console.log(isDivisibleByFive(5));

// Check if a number is even or not
function isEven(num) {
    return num%2 === 0;
}
console.log(isEven(2));

// Checks if both the given numbers are odd or not
let areBothOdd = (a, b) => ( a%2 !== 0 && b%2 !== 0);
console.log(areBothOdd(1, 2));

// Gets full name
let getFullName = (firstName, lastName) => {
    if (firstName == undefined || firstName == null || firstName == "") {
        return lastName;
    }
    else if (lastName == undefined || lastName == null || lastName == "") {
        return firstName;
    }
    else {
        return firstName + " " + lastName;
    }
}
console.log(getFullName("Ram","krishna"))

// gets length of the given word
let getLengthOfWord = (word) => {
    return (word === undefined || (!isNaN(word) && word !== "")) ? -1 : word.length;
}

console.log(getLengthOfWord("Ram"));

//  Given two words, “isSameLength” returns whether the given words have the same length.
let isSameLength = (word1, word2) => (word1.length === word2.length);
console.log(isSameLength("guvi", "geek"));

// Create a function to calculate the distance between two points defined by their x, y coordinates.
let getDistance = (x1, y1, x2, y2) => Math.sqrt(Math.pow((x2-x1), 2) + Math.pow((y2-y1), 2)); 
console.log(getDistance(100, 100, 400, 300));

// Write a function called “getNthElement”. 
// Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array. 
// If the array has a length of 0, it should return ‘undefined’.
let getNthElement = (arr, n) => (arr.length == 0 && n > 0 && n < arr.length) ? undefined : arr[n-1];
console.log(getNthElement([1, 3, 45], 2));

// Write a function called “getLastElement”.
// Given an array, “getLastElement” returns the last element of the given array.
// If the given array has a length of 0, it should return ‘-1’.
let getLastElement = (arr) => (arr.length == 0) ? -1 : arr[arr.length-1];
console.log(getLastElement([1, 2, 3, 4]));

// Write a function called “getProperty”.
// Given an object and a key, “getProperty” returns the value of the property at the given key.
// If there is no property at the given key, it should return undefined.
let getProperty = (obj, key) => (key in obj) ? obj[key] : undefined;
var sampleObject = {
    mykey: "value"
};
console.log(getProperty(sampleObject, "mykey"));
console.log(getProperty(sampleObject, "dummykey"));

// Write a function called “addProperty”.
// Given an object and a key, “addProperty” adds a new property on the given object with a value of true.
let addProperty = (obj, key, value) => {
    obj[key] = value;
    return obj;
}

var sampleObject = {};
console.log(addProperty(sampleObject, "myKey", "value"));

// Write a function called “removeProperty”.
// Given an object and a key, “removeProperty” removes the given key from the given object.
let removeProperty = (obj, prop) => (prop in obj) ? (delete obj[prop]) : undefined;
console.log(removeProperty(sampleObject, "myKey"));

