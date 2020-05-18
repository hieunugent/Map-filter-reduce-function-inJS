var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
// const newNumbers = [];
// function double(x){
//   return x*2;
// }

// function double(x){
//   newNumbers.push(x*2);
// }
// numbers.forEach(double);
const newNumbers = numbers.map(function(x) {
  return x * 2;
});

console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.
const evenNumber = numbers.filter(function(x) {
  return x % 2 === 0;
});
console.log(evenNumber);

const evenNumber2 = [];
numbers.forEach(function(num) {
  if (num % 2 === 0) {
    evenNumber2.push(num);
  }
});
console.log(evenNumber2);

//Reduce - Accumulate a value by doing something to each item in an array.
var newNum = numbers.reduce(function(a, x) {
  console.log("accumulator = " + a);
  console.log("current number = " + x);
  return a + x;
});
console.log(newNum);
//Find - find the first item that matches from an array.
const itemsFind = numbers.find(function(num) {
  return num > 10;
});
console.log(itemsFind);
//FindIndex - find the index of the first item that matches.
const indexFind = numbers.findIndex(function(num) {
  return num > 10;
});
console.log(indexFind);
