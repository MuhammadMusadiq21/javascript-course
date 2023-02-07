///////////////////////////////////////
///////////////if else/////////////////
///////////////////////////////////////


// Write a program that prints good morning in between 6 am to 12 and good afternoon 12 pm to 6pm otherwise good evining.

let hours = 10;
if (hours <= 6 && hours < 12) {
    console.log('Good Morning');
} else if (hours > 18 && hours >= 12) {
    console.log('good afternoon');
} else {
    console.log('Good evining')
}



////////////////////////////////////////
/////////////Switch statement//////////
///////////////////////////////////////



let role;

switch (role) {
    case 'guest':
        console.log('hey');
        break;
    case 'user':
        console.log('bye');
        break;
    default:
        console.log('yes');

}


///////////// if else /////////////////

if (role === 'guest') console.log('hey')
else if (role === 'user') console.log('bye')
else console.log('yes');




///////////////////////////////////////
////////////////loops/////////////////
/////////////////////////////////////

// for loop

for (let i = 0; i < 5; i++) {
    console.log('Hello world');
}
//output will be 
//Hello world
//Hello world
//Hello world
//Hello world
//Hello world


/////////////////////////////////// write a program that will print odd number////////////////////////

for (let j = 0; j <= 5; j++) {
    if (j % 2 !== 0) console.log(j);
}



// while loop

let i = 0;
while (i <= 5) {
    if (i % 2 !== 0) console.log(i);
    i++;
}


// do while
let m = 0;
do {
    if (m % 2 !== 0) console.log(m);
    m++;

} while (m <= 5); // the difference between while and do while loop is that do while execute at least once if condition is false.



// for in loop
const person = {
    name: 'musa',
    age: 21
};

for (let key in person) {
    console.log(key, person[key]); // bracket notation
}
// output will be 
// name musa
// age 21

//////////////////////// for in loop for arrays //////////////
const color = ['red', 'blue', 'black'];
for (let index in color) {
    console.log(index, color[index]);
}

//output will be
// 0 red
// 1 blue
// 2 black

// for of loop
const colors = ['red', 'blue', 'black'];
for (let color of colors) {
    console.log(color);
}



/// write a program that prints max number.

let number = max(1, 2);
console.log(number);

function max(num1, num2) {
    return (num1 > num2) ? num1 : num2; // turnery operator

}
// output will be 2


// write a code that print small number.
let number1 = small(1, 2);
console.log(number1);

function small(num3, num4) {
    return (num3 < num4) ? num3 : num4; // turnery operator

}


/////// write a code thats print is the image is landscape or portrait////

let pic = picture(200, 100);
console.log(pic);

function picture(width, hieght) {
    return (width > hieght) ? 'landscape' : 'portrait';
}
//// output will be landscape

let pic1 = picture(200, 100);
console.log(pic);

function picture(width, hieght) {
    return (width < hieght) ? 'landscape' : 'portrait';
}
// output will be portrait




///////////////////////fizz buzz///////////////

/// if the number is divisible by 3 output will be fizz
//if the number is divisible by 5 output will be buzz
//if the number is divisible by both 3 and 5 output will be fizzBuzz
// if the number is not devisible by both 3 and 5 output will be input it self
// if the number is not an number output will be 'not a number'

const output = fizzBuzz(3);
console.log(output);

function fizzBuzz(input) {

}



////////////////////////////////////
/////////////check speed ///////////
////////////////////////////////////

// speed limit = 70 message will be ok
// if speed increase to 5 he will gey point 1
// if speed increse to 180 kmph the message will be license cancelled. // 12 points 
// math.floor(1.3)  
checkspeed(70);

function checkspeed(speed) {

}

/////////////////////////////////////////////////

checkspeed(50);

function checkspeed(speed) {


    const speedLimit = 70;
    const kmPerPoints = 5;

    if (speed < speedLimit) {
        console.log('Ok');
    } else {
        const point = math.floor(speed - speedLimit / kmPerPoints)
        if (points > 12)
            console.log('license cancelled');
        else {
            console.log('points', point);
        }
    }
}



//////////////////////////// write a function that tells the number is even or odd.

numbers(17);


function numbers(number) {
    if (number % 2 === 0)
        console.log(number, 'Even');
    else if (number % 2 !== 0) {

        console.log(number, 'odd');
    }
}
/// output will be according to number .

//////////////////////////////////////with for loop/////////////////

showNumber(13);

function showNumber(num) {
    for (let i = 0; i <= num; i++) {
        const message = (i % 2 === 0) ? "Even" : 'odd'
        console.log(i, message);
    }
}

/////////////////////////////show object properties string or not//////////

let personl = {

    age: 10,
    firstName: 'b',
    lastName: 'd'

};
obj(personl);

function obj(personl) {
    for (let key in personl)
        if (typeof personl[key] === 'string')
            console.log(key, personl[key]);

}





///////////////////////////thats print sum of multiple of 3 and 5/////////////////////

console.log(sum(10));

function sum(limit) {
    let sum = 0;

    for (let i = 0; i <= 10; i++)
        if (i % 3 === 0 || i % 5 === 0)
            sum += i;

    return sum;
}
// remaining 
