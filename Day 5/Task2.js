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