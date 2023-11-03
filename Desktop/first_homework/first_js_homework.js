
/* Section 1:
Q1: What does the acronym DRY stand for? Why should we pay attention to it? What programming tools have we learned to write DRY code?

Q2:What is the difference between const and let and var? Please limit your answer to no more than three short sentences. Don't be afraid to research using google and other resources

A1: Don’t Repeat Yourself(DRY). It allows for the code to be more efficient (time and resources). So far, we have used HTML, CSS, and Javascript to write DRY code.
A2: Const = are variables that cannot be updated or re-declared
    Let = preferred for variable declaration. Can be updated but not re-declared
    Var = is an older form of javascript variable. Can be updated and re-declared
*/


// Section 2

//GIVEN variable definitions
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;

// my answers
console.log(a < b)
console.log(c > d)
console.log('Name' === 'Name')
console.log(a < b < c)
console.log(a === a !== d)
console.log(e !== 'Kevin')
console.log(48 !== '48')
console.log(f !== e)

//Set a new variable g to 0
var g = 0;
console.log (g);

//Then set the variable g to be equal to b + c
var g = b + c;
console.log (g);

//BONUS
console.log(a < (b || f) === !f && e !== c)


// Section 3: 

/* my Answer
while (true) {
	console.log('Do not run this loop');
}

Answer: Yes, because the while loop is only check to see if (true) function is true, and it will always be true.

const runProgram = true;

while (runProgram) {
	console.log('Do not run this loop');
	runProgram = false;
}

Answer: This loop is an infinite loop. Even though the code try to reassign the variable to 'false' since the original variable is a const it cannot be changed.
The output would be 'Do not run this loop' over and over again.
*/

// creates a variable called 'letters' and assigns "A"
let letters = "A";
// creates a variable called "i" and assigns the value 0
let i = 0;

/* creates while loop that continues to run until i variable is equal to or greater than 20.
    The while loop adds an additiona "A" every time it runs.
    The end of the loop adds one to variable i.
*/
while (i < 20) {
	letters += "A";
	i++;
}
// prints the variable "letters"
console.log(letters);
// The code ran as expected.

// Section 4:

// A 'for' loop perfomrance similarly as a while loop but it allows for the loop variables to be inside the formula () instead of each line of code
// The first part of the control panel is: Initializtion
// The second part of the control panel is: Condition
// The third part of the control panel is: increments or decrements

for (let i = 0; i < 1000; i++) {
    console.log(i);
}

//BONUS Challenge
// the backslash is an indicator that the quotation mark after it is not starting a new sentence
// the forward slash is meant for a mathematical equation (division)

console.log("Without you, today\'s emotions are the scurf of yesterday\'s");

for (let i = 999; i > -1; i--) {
    console.log(i);
}

for (let i = 1; i < 11; i++) {
    console.log("The value of i is: " + i + " of 10");
}

const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
for (let i=0; i < StarWars.length; i++){
    console.log(StarWars[i]);
}