// Fundamentals II

// String Manipulation
//

// Post Climb Postcard
print(message);
if (message.length > 80) {
    print('The message is too long for a postcard.');
}
if (message.length < 80) {
    print('The message fits on a postcard.');
}

// How Long?
// What will the code print out?
print('I code'.length);
// it will print out `6`

// Chat Bot
print(chat);
if (chat.includes('hello')) {
    print('Hi, can I help you pick a destination?');
}
if (chat.includes('bye')) {
    print('See you later, have a great trip!');
}

// One Day Away
var message = 'Today is my birthday!';
message = message.replace('day', 'morrow');
print(message);

// Is There a Day?
// What will this code print out?
print('Happy days'.includes('day'));
// it will print out `true`

// How Do You Do?
// What will be the output of this code?
var greeting = 'Hello, Grasshopper!';
greeting = greeting.replace('hopper', 'jumper');
print(greeting);
// output will be `Hello, Grassjumper!`

// Alternative Options
//

// Color Keeper
var color = 'yellow';
drawBox(color);
for (let color of [
    'blue',
    'green'
]) {
    drawBox(color);
}
drawBox(color);

// Let It Go?
// What will be the output of this code?
var x = 10;
if (x > 5) {
    let x = 1;
} else {
    let x = 0;
}
print(x);
// the output will be `10`

// Roads or Rails
var timeOffWork = 7;
var daysNeeded = 5;
timeOffWork > daysNeeded ? print('Go on vacation') : print('Go to work');
var train = 3;
var car = 2;
car < train ? print('Drive a car') : print('Buy train tickets');

// Which of the Three?
// Which 2 symbols does the ternary operator use?
// it uses `?` and `:`

// Simpler Math
let x = 5;
x++;
print('x is ' + x);
x--;
print('x is now ' + x);

// Winter is Coming
let ant = 40;
let gift = 10;
let grasshopper = 0;
ant -= gift;
grasshopper += gift;
print('The ant has ' + ant + ' seeds, and the Grasshopper has ' + grasshopper + ' seeds');

// Subtraction of Addition?
// What will be the output of this code?
let x = 3;
x += 2;
print(x);
// the output will be `5`

// Console Loggin'
print('In Grasshopper, the print() function logs strings and numbers to the console window');
console.log('console.log can also log to the console window');
console.log('and also works outside Grasshopper.')

// Where to Log?
// What should the .log() method be called with to print out a string?
// it is `console` .log()

// Functions
//

// Money Changer
























