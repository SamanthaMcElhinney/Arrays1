var cities = ["Seattle", "Los Angeles", "Boston", "New York", "Vegas"];
var ages = ["32","5", "21", "25", "70"];
var tests = [true, false, true, false];
// This method removes the last element from the Array. So it will remove Vegas;
cities.pop();
console.log(cities);
// This method adds an element to the array. So it should add 80 to the end of the array.;
ages.push("80");
console.log(ages);
// This method removes the first element of the array.;
tests.shift();
console.log(tests);
//The first value is 0 in the index position. My first variable has 5 elements.
//If I wanted to access the second element- Los Angeles I would enter the following code:
console.log(cities[1])