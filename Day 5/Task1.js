// All the below functions are anonymous functions

// Print all the odd numbers in an Array
(function() {
    var numbers = [22, 33, 2, 5, 9, 7, 2, 55];
    numbers.forEach(number => {
        if(number%2 > 0) {
            console.log(number);
        }
    })
})();

// Convert all the strings to title caps in an array
(function() {
    var titles = ["ram", "krishna", "likith", "kushal", "prudhvi"];

    console.log(titles.map(title => {
        var temp = title.toLowerCase().replace(title[0], title[0].toUpperCase());
        return temp;
    }));
})();

// Sum of all numbers in an array
(function() {
console.log([1, 2, 5, 8].reduce((a, b) => a+b, 0));
})();

// Return all the prime numbers in an array
(function() {
    var numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    function isPrime1(n) {
        if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
        var m = Math.sqrt(n); //returns the square root of the passed value
        for (var i = 2; i <= m; i++)
            if (n % i == 0) return false;
        return true;
    }
    console.log(numbers.filter(number => isPrime1(number)));
    return numbers;
})();

// Return all the palindromes in an array
(function() {
    var strings = ["anna", "ramki", "civic", "srikanth", "kayak", "manoj", "level", "madam", "mom", "noon", "racecar"]
    function isPalindrome(str) {

        var reverseString = str.split("").reverse().join("");
        return ((str === reverseString) ? true : false);
    }
    strings = strings.filter(string => isPalindrome(string));
    console.log(strings);
    return strings;
})();

// Return median of two sorted arrays of same size
(function() {

})();

// Remove duplicates from an array
(function() {
    var arr = [2, 2, 4, 4, 7, 7];
    console.log([...new Set(arr)]);
})();

// Rotate an array by k times
(function() {

})();