console.log('hello world');



////////////////////////////
//// Declare a variable/////
////////////////////////////

let name = 'musadiq';
console.log(name);

//variables cannot be a reserverd key
//should be meaningful
//cannot start with a number
//cannot contain space or hyphen(-)
// are case sensitive

////////////////////////////////////////
/////Two ways to declare a variable/////
/////////////////////////////////////////

// camelcase

let firstName = 'musadiq';
let first = 'musa',
    secondName = 'Zahid';
let fir = 'musa';
let secondNam = 'Zahid';

////////////////////
/////constants/////
///////////////////

const musa = 0.3;
musa = 1;
console.log(musa);


// in this case it shows an error because the value of constant can not change.
let musad = 0.3;
musa = 1;
console.log(musa);

// if you want to change the value of varibale in future you have to choose let instead of const.



///////////////////////////////
/////Primitive/Value types/////
///////////////////////////////

let mame = 'musadiq'; // string literal
let age = 30; // Number literal
let bool = true; // Boolean literal
let ali = undefined; // if you dont want to write undefined its already show undefined.
let you = null; // we used this value type when we explicitly clear the value of variable.


///////////////////////////////
/////Dynamic typing////////////
///////////////////////////////

// in other languages we have different type of value like number itself has floating number or etc but in javascrpit if we have number and its decimal number.the type of a number is still number not a float . thats why its dynamic typing.