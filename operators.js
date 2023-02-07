//////////////////////////////////////////////
////////////Operators////////////////////////
////////////////////////////////////////////


// operators are used to create the expression and algorithms from a variables.

//Arthematic Operator
//Assignment Operator
//Comperison Operator
//Logical Operator
//Bitwise Operator


///////////////////////////////
////////Arthematic/////////////
///////////////////////////////

let x = 10;
let y = 6;


console.log(x + y); // Adding two values
console.log(x - y); // subtracting two values
console.log(x * y); // multiply two value
console.log(x / y); // divide two values
console.log(x % y); // remainder of divison.
console.log(x ** y); // exponent (x power y)


///////////////////////////increment operator///////////////

console.log(++x); // this will add value first in x
console.log(x++); // this will print value of x first after add one in it
console.log(x); // output will be 11 in this case.



////////////////////////////Decrement Operator///////////////

console.log(--x); // this will substract value first in x.
console.log(x--); // this will print value of x first after substract one from it.
console.log(x); // output will be 11 in this case.




//////////////////////////////////////
/////////Assignment operator//////////
//////////////////////////////////////

let z = 4; // this will assign a value to z.

z = z + 5; // this will add 5 to z.

z += 5; // this will do the same as upper equation . this will also add 5 to z.


// for multiply 

z *= 5;

///////////////////////////////////////
///////////Comperison Operator/////////
///////////////////////////////////////

////////// compares the value of variables.

let m = 5;

// relational operators
console.log(x > 0);
console.log(x >= 0);
console.log(x < 5);
console.log(x <= 5);

// equality operators
console.log(x === 5);
console.log(x !== 4); // the output of all these equation shows in boolean.(true/false)



// strict equality operator its will compare (type + value). both are same it will show true otherwise false.
// for example

console.log(1 === 1); // Output will be true
console.log('1' === 1); // output will be false because the type of left one in now string .


//lose equality operator

console.log('1' == 1); // output will be true beacuse it will not compare like upper one.
console.log(true == 1); // output will be true beacuse it will automatically change the type of right side to true and print true.



/////////////////////////////////////////
////////////ternary operators////////////
/////////////////////////////////////////

let points = 110;

let type = points > 100 ? 'gold' : 'silver' // in this case if the points are greator than 100 the output will be gold . if the value of points is samller than the 100 the output will be silver.
console.log(type);

// if this ? 'output' 
//if this : 'ouput'

/////////////////////////////////////////
/////////////logical operators///////////
/////////////////////////////////////////


// we have two logical operators 
// And operator(&&) in this logical operators if two oprands are ture output will be true otherwise false.
// for example

let musaZahid = true;
let ali = true;

let getScore = musaZahid && ali;

console.log(getScore); // the output will be true because the value of both oprands is true.

// OR operator(||) in this logical operators if one oprand is ture output will be true .
// for example

let zahid = true;
let musa = false;

let score = zahid || musa;

console.log(score); // the output will be true because the value one oprand is true.


//Not(!) operator if will change the value of true to false and false to true.



////////////////////////////the usage of OR AND Operator//////////////////

// for example

let userColor = 'red';
let defaultColor = 'blue';
let color = userColor || defaultColor;
console.log(color); // the output will be red because the user choose the color

// 2nd example
let userColo = undefined;
let defaultColo = 'blue';
let colorA = userColo || defaultColo;
console.log(colorA); // the output will be blue because the user not choose the color and value is falsy.



//////////////////////////////////////////
/////////////////bit wise operator////////
//////////////////////////////////////////

// 1:00000001
// 2:00000010
// 3:00000011
// R:00000000


console.log(1 | 2); // the output will be 3 
console.log(1 & 2); // the output will be 0




/////////////////////////////////////////////////
//////////////////precedence////////////////////
////////////////////////////////////////////////


let l = 2 + 5 * 4;
console.log(l); //  it will print 22 because the presedence of multiply is higher than plus operator.


let n = (2 + 5) * 4;
console.log(n); //  it will print 28 because the presedence of bracket  is higher than the others one.



//////////////////////////////// 
/////////Swapping a value///////
////////////////////////////////

let a = 'red';
let b = 'blue';

let c = a; // red
a = b; // blue
b = c; // red 
console.log(a);
console.log(b); // the output is blue and red now we have blue in variable a and red in variable b.