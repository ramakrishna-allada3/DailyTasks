//Print odd numbers in an array
let printOddNumbers = (arr) => {
    arr.forEach(element => {
        if (element % 2 > 0) {
            console.log(element);
        }
    });
};

printOddNumbers([1, 2, 3, 4, 5, 6, 7]);

// Convert all the strings to title caps in a string array;
let titleCaps = () => {
    var titles = ["ram", "krishna", "likith", "kushal", "prudhvi"];

    console.log(titles.map(title => {
        var temp = title.toLowerCase().replace(title[0], title[0].toUpperCase());
        return temp;
    }));
};

titleCaps();


// Sum of all numbers in an array
let sum = () => {
    console.log([1, 2, 5, 8].reduce((a, b) => a+b, 0));
};

sum();

// Print all the prime numbers in an array
let printPrimeNumbers = () => {
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
};

printPrimeNumbers();

// Return all the palindromes in an array
let getPalindromes = () => {
    var strings = ["anna", "ramki", "civic", "srikanth", "kayak", "manoj", "level", "madam", "mom", "noon", "racecar"]
    function isPalindrome(str) {

        var reverseString = str.split("").reverse().join("");
        return ((str === reverseString) ? true : false);
    }
    strings = strings.filter(string => isPalindrome(string));
    console.log(strings);
    return strings;
};

getPalindromes();