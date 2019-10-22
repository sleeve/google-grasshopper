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





























