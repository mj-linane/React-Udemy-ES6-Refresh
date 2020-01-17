// Old way
function myFunc() {

}

// ES6
const myFunct = () => {

}

// No more problems with 'this', in arrow functions it always refers to 
// the right arrow function

// Examples
function printMyName(name) {
  console.log(name);
}

const printMyName = (name) => {
  console.log(name);
}

// For exactly 1 argument, we can omit parenthesis
const printMyName = name => {
  console.log(name);
}

// if no argument is given, we still need to pass in parethesis
const printMyName = () => {
  console.log(name);
}

// Multiple parameters
const printMyName = (name, age) => {
  console.log(name, age);
}

// Simple return with no ther code
const multiply = (number) => {
  return number * 2;
}

// Here is a shorter way of writing that function above
const multiply = (number) => number * 2;

// even shorter :)
const multiply = number => number * 2;

