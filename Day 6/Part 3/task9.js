// print all odd numbers in an array using IIFE function

// Code:

// var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];(function() {
//  for (var i = 0; i < arr.length; i++) {
//  if (arr[i] % 2 === 0) {
//  console.log(arr[i]);
//  }}
// })();



//Solution 
var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];(function() {
 for (var i = 0; i < arr.length; i++) {
 if (arr[i] % 2 !== 0) {
    console.log(arr[i]);
 }}
})();