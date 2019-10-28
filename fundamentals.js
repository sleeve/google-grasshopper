// Fundamentals

// Drawing shapes
// French Flag
drawBox(blue);
drawBox(white);
drawBox(red);
newLine();
drawBox(blue);
drawBox(white);
drawBox(red);

// Gabonese Flag
drawBox(green);
drawBox(green);
drawBox(green);
newLine();
drawBox(yellow);
drawBox(yellow);
drawBox(yellow);
newLine();
drawBox(blue);
drawBox(blue);
drawBox(blue);

// How Many Blue?
// How many blue boxes will be drawn from this code?
drawBox(orange);
drawBox(blue);
orange;
newLine();
drawBox(orange);
blue;
// 1 blue box will be drawn

// Gabonese Flag Helper
drawBoxes('ggg');
newLine();
drawBoxes('yyy');
newLine();
drawBoxes('bbb');

// Gabonese Flag Shortcuts
drawBoxes('ggg yyy bbb');

// B Is for Blue?
// How many blue boxes will be created with this code?
drawBoxes('bob r r r');
// 2 blue boxes will be created

// A Dash of Random
drawBox(pickRandom(color));
drawBox(pickRandom(color));

// Variables
// Poland to San Marino
var x = white;
drawBox(x);
drawBox(x);
drawBox(x);
newLine();
x = blue;
drawBox(x);
drawBox(x);
drawBox(x);

// Today Is the Day
var month = 'August';
print(month);
var day = 'Friday';
print(day);

// Which Drinks
// What will be the output of this code?
var drink = 'juice';
print(drink);
drink = 'water';
print(drink);
// Output will be
// juice
// water

// Which Word
// What will be the output of the following code?
var word = 'alphabet';
var alphabet = 'word';
print(alphabet);
// Output will be
// word

// What's x?
// What will be the output of the following code?
var y = 5;
var x = y;
print(x);
// Output will be
// 5

// Arrays
//

// Magic Answers
var answer = pickRandom([
    'yes',
    'no',
    'maybe'
]);
print(answer);

// Bake a Cake
var ingredients = [
    'flour', 
    'sugar', 
    'eggs'
];
cook(ingredients);

// Whose Shoes
// Which variable is storing an array
var myShoes = 'sneakers, highHeels, pumps';
var yourShoes = ['sneakers', 'highHeels', 'pumps']
var shoeColor = drawBox(blue)
// yourShoes is storing the array

// Checkerboard
var colors = [
    'black',
    'white'
];
drawBox(colors[0]);
drawBox(colors[1]);
drawBox(colors[0]);
newLine();
drawBox(colors[1]);
drawBox(colors[0]);
drawBox(colors[1]);
newLine();
drawBox(colors[0]);
drawBox(colors[1]);
drawBox(colors[0]);

// If Statements
//

// If Editor
var color = pickRandom([
    blue,
    green
]);
print(color);
if (color === blue) {
    drawBox(blue);
}

// Flip a Coin
var answer = pickRandom([
    'heads',
    'tails'
]);
print(answer);
if (answer === 'heads') {
    drawBoxes('gwg ggg gwg');
}
if (answer === 'tails') {
    drawBoxes('rrr wrw wrw');
}

// Is it Happy?
// What code would check if the grasshopper variable is holding the string 'happy'?
var grasshopper = 'happy';
// grasshopper === 'happy';

// Flip a Coin Again
var answer = pickRandom([
    'heads',
    'tails'
]);
print(answer);
if (answer === 'heads') {
    drawBoxes('gwg ggg gwg');
} else {
    drawBoxes('rrr wrw wrw');
}

// Guessing Game
var pea = pickRandom([
    1,
    2,
    3
]);
if (pea !== 1) {
    print('Not under shell 1')
}
if (pea !== 3) {
    print('Not under shell 3')
}

// What's the Weather?
// What will this code print out?
var todayWeather = 'rainy';
var tomorrowWeather = 'cloudy';
if (todayWeather === 'rainy') {
    print('Bring an umbrella');
}
if (todayWeather !== 'rainy') {
    print('Maybe the sun will come out');
}
// It will print 'Bring an umbrella'

// Which Bananas?
// Which pair of value would let the code print 'Let's make banana bread'?
var bananas;
var numberBananas;
if (bananas !== 'green') {
    if (numberBananas > 5) {
        print("Let's make banana bread");
    }
}
// bananas = 'yellow';
// numberOfBananas = 6;

// Operators
//

// Modifier Math
var x = 5;
x = x + 1;
print('x is ' + x);
x = x - 2;
print('x is now ' + x);

// Simply More Math
var y = 10;
y = y * 2;
print(y);
y = y / 3;
print(y);

// How Much?
// What will be the final value of the `x` variable?
var x = 1;
x = x + 3;
x = 10 - x;
print(x);
// final value will be `6`.

// How Many Seconds?
// There are 60 seconds in a minute. How would you convert minutes into seconds?
var minutes = 35;
// var seconds = minutes * 60;

// Open the Lock
print('pinNumber is ' + pinNumber);
print('foundKey is ' + foundKey);
if (foundKey === 'yes' && pinNumber === 10) {
    print('You opened the lock!');
}
if (foundKey === 'no' && pinNumber === 10) {
    print('The pin number is right, but you are missing the key.');
}

// Describe the Numbers
print('x is ' + x);
print('y is ' + y);
if (x > 3 && y < 11) {
    print('x is greater than 3, and y is less than 11');
}
if (x > 10 || y > 10) {
    print('x or y, or both, are greater than 10');
}

// Loops
//

// String Looping
for (var letter of 'grasshopper') {
    print(letter);
}

// Longer Rainbow
for (var x of [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet'
]) {
    drawBox(x);
    drawBox(x);
    drawBox(x);
    newLine();
}

// Image Decoder
for (var letter of img) {
    if (letter !== 'e') {
        drawBoxes(letter);
    }
}

// Which Direction?
// What will be the output of this code?
for (var element of [5,4,3,2,0,1]) {
    print(element);
}
// output will be '5, 4, 3, 2, 0, 1'

// Loops II
//

// Counting with Loops
for (var i = 0; i < 10; i = i + 1) {
    print(i);
}

// Happy New Year
for (var i = 10; i > 0; i = i - 1) {
    print(i);
}
print('Happy New Year!');

// What's i?
// What will be the output of this code?
for (var i = 0; i < 5; i = i + 1) {
    print(i);
}
// output will be `0, 1, 2, 3, 4`

// Band Names Generator
for (var adj of [
    'Raging',
    'Happy',
    'Hungry'
]) {
    for (var noun of [
        'Pharmacists',
        'Squids',
        'Twins'
    ]) {
        print('The ' + adj + ' ' + noun);
    }
}

// What's the Order?
// What will be the output of this code?
for (var activity of ['dancing', 'jumping', 'singing']) {
    for (var family of ['brother', 'mother', 'father']) {
        print(activity + ' ' + family);
    }
}
// output will be
// dancing brother
// dancing mother
// dancing father
// jumping brother
// jumping mother
// jumping father
// singing brother
// singing mother
// singing father

// Object Expressions
//

// Custom colors
var someCustomColor = {
    red: 255,
    green: 0,
    blue: 255
};
drawBox(someCustomColor);

// Make a Name for Yourself
var name = {
    first: 'Martin',
    middle: 'Luther',
    last: 'King'
}
print(name.first + name.middle + name.last);

// Which Transmission
// What is the value of the `transmission` property in car?
var car = {
    transmission: 'automatic',
    doors: 4,
    color: blue
};
// value is `automatic`.

// How Blue Can You Get?
print(rgbObject.blue);
if (rgbObject.blue > 200) {
    drawBox(rgbObject);
}

// Which Color?
// What color box will this code create?
var rgbObject = {
    red: 0,
    green: 0,
    blue: 255
};
drawBox(rgbObject);
// a blue color box will be created.

// What's Sugar
// What is the value stored in the the variable `sugar`?
var teacup = {
    red: 100,
    green: 50,
    blue: 50
}
var sugar = teacup.blue;
// the value stored will be 50

// Is It Blue Enough?
// Which code will draw a box only if the blue property of rgbObject is more than 10?
var rgbObject = {
    red: 128,
    green: 64,
    blue: 32
};
// the following code will draw the box correctly
// if (rgbObject.blue > 10) {
//     drawBox(rgbObject);
// }

// Climb the Mountain
//

// State Your Goal
print('I am going to climb a mountain');

// Pack Your Bag
var myBackpack = {
    food: 'bananas',
    equipment: 'map',
    clothing: 'hat'
};
print(myBackpack.food);

// Get More Supplies
var myBackpack2 = {
    food: [
        'bananas', 
        'nuts', 
        'energy bar'
    ],
    equipment: [
        'map', 
        'compass'
    ],
    clothing: [
        'scarf', 
        'jacket', 
        'hat']
};
print(myBackpack2.food);
print(myBackpack2.equipment);
print(myBackpack2.clothing);

// Update Your Progress
var elevation = 100
print(elevation);
elevation = elevation + 455
print(elevation);

// Backpack Mistake
for (var element of otherBackpack.food) {
    print(element);
}

// The Final Ascent
for (var element of otherBackpack.equipment) {
    if (element === 'rope') {
        print('I found some rope!');
    }
    else {
        print('Rope not found.');
    }
}
