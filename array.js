////////////////////////////////////
/////////////arrays/////////////////
////////////////////////////////////

// array is datastructure that we used to represent a list of items.

let selectOne = ['blue', 'red'];
selectOne[2] = 'blue';
console.log(selectOne);


//////////////////////////////////////////////
/////////Adding an element in an array////////
//////////////////////////////////////////////



// we have three method to add element in array
// at the end of array
// at the start of an array
//between of an array


const numbers = [3, 4];


numbers.push(5, 6); // end of an array
console.log(numbers);
// new array will be[3,4,5,6]


numbers.unshift(1, 2); // start of an array
console.log(numbers);

// new array will be [1,2,3,4,5,6]

numbers.splice(3, 0, 'a', 'b'); // this will add at the point where you want to add element .
console.log(numbers);


///////////////////////////////////////
//////////finding elment in array//////
///////////////////////////////////////

//primitive method

const loo = [1, 2, 3, 1, 4];
console.log(loo.indexOf(1)); // if the one is exsist in an array it will return the index of that element other wise it will return -1.

// as you see we have two 1 in an array if we want to find the the second one index we use lastindexOf method.

console.log(loo.lastIndexOf(1)); // it will return 3 .because one is at index 3.


// another method if you want to return value in boolean.

console.log(loo.includes(1)); // it will return value true.


// refrence method

const zahid = [
    { id: 1, maiz: 'a' },
    { id: 2, maiz: 'b' },

];

const musa = zahid.find(function(musa) {
    return musa.maiz === 'a';
});

console.log(musa);
//// this will return object id:1, maiz:'a' 

//findIndex will eturn the index of array object .

//////////////////////////////////
///////////arrow function/////////
//////////////////////////////////

const ahid = [
    { id: 1, maiz: 'a' },
    { id: 2, maiz: 'b' },

];

const mus = ahid.find(mus => mus.maiz === 'a');

console.log(mus);




///////////////////////////////////////////////
////////////deleting an element from array/////
///////////////////////////////////////////////



// we have three methods to delete an elemet from an array.

// pop method// end element of array
//shift method// beigning element of array
//splice method// center you want to remove from index.



///////////////////////////////
//////////empyting n array/////
///////////////////////////////


let number = [1, 2, 3, 4];
let another = number; // when we console another it will showw all the element in number array.

// solution 1
number = []; // when we console the number array it will show an empaty array.

// solution 2
number.length = 0; // now this will also show an empty array

// solution 3
numbers.splice(0, number.length);


// solution 4
while (number.length > 0)
    number.pop();

///////////////////////////////////
/////////combining an array////////
//////////////////////////////////

let ali = [1, 2, 3, 4];
let alime = [5, 6, 7, 8];

const nnum = ali.concat(alime);
console.log(nnum);

// slice method will slice out element from an array using index number.



///spread operator

let ali1 = [1, 2, 3, 4];
let alime1 = [5, 6, 7, 8];

const nnum2 = [...ali1, ...alime1]; // this will add both array and combine in new arrary.
console.log(nnum2);

//////////////////////////////////////////
///////////iterating an array/////////////
//////////////////////////////////////////



let you = [1, 2, 3];
for (let number of you)
    console.log(number);

////////////////////////this will console
//1
//2
//3


/// second method
you.forEach(number => console.log(number));
////////////////////////this will console
//1
//2
//3


///////////////////////////////////////////
//////////join an array element////////////
///////////////////////////////////////////

//we can join alement by join method

let f = [1, 2, 3];
const y = f.join(',');
console.log(y);

// this will join with comma.

let message = 'this is my first message'

const mes = message.split(' ');
console.log(mes);

// console will show array of this message.



/////////////////////////////////////////////////
/////////////////sorting of an array/////////////
/////////////////////////////////////////////////


let cont = [3, 2, 1];

cont.sort();
// this will sort an array.
cont.reverse();
//this will reverse the element of an array

// let suppose we have an objects and we want to arrange the object by its properties.


let ou = [
    { id: 1, you: 'nodejs' },
    { id: 2, you: 'java' }

];
ou.sort(function(a, b) {
    if (a.you < b.you) return -1;
    if (a.you > b.you) return 1;
    return 0;

});



///////////////////////////////////////////////////////
//////////////testing of an array element//////////////
///////////////////////////////////////////////////////


const yo = [1, 2, 3];

const allPositive = yo.every(function(value) { // every() checks the every condition. if all satisfy then true
    return value >= 0;

});

console.log(allPositive);


//////////////////this will show true because all values of an array is positive.


const yol = [1, 2, 3];

const atLeastOnePositive = yol.some(function(value) { // some() checks the condition. if one value satisfy then true.
    return value >= 0;

});

console.log(atLeastOnePositive);

/////////////////////////////////////////////
//////////////filter of an array/////////////
/////////////////////////////////////////////


const mik = [1, 2, -1, 4];

const milk = mik.filter(n => n >= 0);

console.log(milk);

// this will return all positive value from array.



///////////////////////////////////////////////////
/////////////////////////reducing an array/////////
///////////////////////////////////////////////////

const mah = [1, -2, 4, 5];


const add = mah.reduce(
    (accumlator, currentValue) => accumlator + currentValue
);
//this will return sum of array.

///////////////////////////////////////////////exercise//////////////////////////


const nm = value[1, -10];
console.log(nm);

function value(min, max) {
    const output = [];
    for (let i = min; i <= max; i++)
        output.push(i);
    return output

}