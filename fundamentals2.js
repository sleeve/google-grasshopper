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





































