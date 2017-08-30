function add (a,b) {
    return a+b;
}

console.log(add(3,1));

//array with 2 values
var toAdd = [9,5];

//spread operator that spreads the values from the array as individual values
console.log(add(...toAdd));

var groupA = ['Jen', 'Cory'];
var groupB = ['Tim'];
var final = [3, groupA];
// displays 3 and array: [ 3, [ 'Jen', 'Cory' ] ]
var final = [3, ...groupA];
//displays 3 and jen and cory: [ 3, 'Jen', 'Cory' ]
console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];
//Hi Andrew, you are 25
function hello(name, age) {
    console.log("Hi "+ name + ", you are " + age);
}

hello(...person);
hello(...personTwo);

var names = ['Mike', 'Ben'];
var final = ['Gogu',...names];
// Hi Mike
final.forEach((name) => {
    console.log("Hi "+ name);
});