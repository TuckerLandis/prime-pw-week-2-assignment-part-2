// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and assign 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// we declare a variable 'name' and assign it's value to a string 'Dane'
// we use a conditional statment to check whether or not the name variable is equal
// to mary, if so we log the string 'Hi, Mary!' to the console, and if not, we
// log 'How do you do' to the console


//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// we declare a variable named secret and don't assign it a value
//we declare a variable named code and assign it a number value of 123
// we use a conditional statement to check if the code variable is exactly equal to the number value 123
// and if so =, the code block executes setting the variable secret is set to the string 'super'
// and the variable code to twice itself
// a seperate conditional statement checks if code = number value 250, and if so,
// the code block execute, setting the variable secret to the string value 'duper'
// we then log the value of the variabled named secret to the console

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// we declare a variable named isStudent and assign it a boolean value of true
// we declare a variable named age and assig it  a number value 34
// we declare a variable named zip and assign it a number value 55407
// a conditional statement checks these values and executes related code blocks like so
// if the person is a student and their zip code input is greater than 80000, we log "You're a student on the West Coast!" to the console
// if the person is not a student and they are less than 30 years of age, we ask their hobbies via a logged console message
// if the person is a student but they don't have a zip code above 80000, we simply welcome them to prime
// if none of the above conditons are met and none of the associated code blocks are executed, we ask them about the weather


//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and  1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//fix - the colors are swapped, and the executed code block does not set both to string value 'purple' as described
 // we can also shorten the code to simply check "if (mix)" which will check if mix is true in a boolean sense

/* fixed code below

let colorOne = 'blue';
let colorTwo = 'red';

if (mix) {
colorOne = 'purple';
colorTwo = 'purple'
}

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'



/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/
// fix - as much as i wish it wasn't, time is always moving, so we do not want to set it a constant, unchangable value
// the description supposes a condition that requires both variables to have a certain value relationship,
// the code shows that only one of these two conditions would need to be met for the code block to execute, not both

/* fixed code
let temp = 40;
let time = 4;

if (temp > 39 && time >= 4) {
console.log('throw away the food!')
}


//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}


// instead of checking whether age <= minAge, we are checking the inverse

- fixed code -
 if (age >= minAge) {
console.log('enter')
} else {
console.log('No entry');
}
*/
