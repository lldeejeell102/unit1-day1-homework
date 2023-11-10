
/* Section 1:
Q1: What does the acronym DRY stand for? Why should we pay attention to it? What programming tools have we learned to write DRY code?
A1: Don’t Repeat Yourself(DRY). It allows for the code to be more efficient (time and resources). Functions are a great representaion of DRY principles in action.

Q2:What is the difference between const and let and var? Please limit your answer to no more than three short sentences. Don't be afraid to research using google and other resources
A2: Const = are variables that cannot be reassigned, Immutable variables
    Let = Can be reassigned, Mutable varibales
    Var = A function scoped variable that takes advantage of Hoisting, allowing this variable to move through scope freely. Very Mutable, seen in legacy code.
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
console.log(a + b === c)
console.log(a * a === d)
console.log(e !== 'Kevin')
console.log(48 !== '48')
console.log(f !== e)

//BONUS
// > , < !== and ===.
a < (b || f) === !f && e !== c


//Set a new variable g to 0
let g = 0; // By using let you do not have to re-delcare your varable 
console.log (g);

//Then set the variable g to be equal to b + c
g = b + c; // This will allow you to re-assign the value of said variable
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

Answer: This is not an infinate loop, The program will error out with an Uncaught TypeError: Assignment to a constant variable.
line 63 will terminate this loop when run by throwing an error.
*/

// creates a variable called 'letters' and assigns "A"
let letters = "A";
// creates a variable called "i" and assigns the value 0
let i = 0;

/* creates while loop that continues to run until i variable is equal to or greater than 20.
    The while loop adds an additiona "A" every time it runs.
    The end of the loop adds one to variable i.
*/
while (i <= 20) { // less than or Equal to 20
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

for (
	let i = 0; // Initialization of variables (you can declare more than one) to be used
	i < 1000; // An expression/condition that evaulates to a Boolean value (true/false)
	i++ // updater, how the counting/memoing variable {i} will behave
) { // code to be executed scoped to this code block, so long as the expression remains false
    console.log(i);
}

//BONUS Challenge
// the backslash is an indicator that the quotation mark after it is not starting a new sentence
// the forward slash is meant for a mathematical equation (division)

console.log("Without you, today\'s emotions are the scurf of yesterday\'s");

for (let i = 999; i > -1; i--) {
    console.log(i);
}

// Another way to write the above code block with a do{code} while(conditional) loop

let i = 999
do {
    console.log(i)
    --i // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
} while ( i > 0 ) // While i > 0 execute the do scoped block of code.

for (let i = 1; i <= 10; i++) {
    console.log("The value of i is: " + i + " of 10");
}

const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
for (let i=0; i < StarWars.length; i++){
    console.log(StarWars[i]);
}

// This is the same as above another way.
StarWars.forEach((name) => console.log(name))
