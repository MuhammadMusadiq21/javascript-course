////////////////////////////////
/////////////Object/////////////
////////////////////////////////



let person = {
    userName: 'musa',
    age: 21
};

// so in this case person is an object with the properties of userName and age. 

// if we want to change the value of object properties. we have two methods.

///////////////////////  1: dot notation//////////////////

person.userName = 'zahid';

/////////////////////// 2: bracket notation//////////////////////

person[userName] = 'ali';
console.log(person.userName);



////////////////////////////////////
////////////OOP/////////////////////
////////////////////////////////////

// if a function is part of an object is known as method.

// for example.


let cricle = {
    radius: 1,
    location: {
        p: 1,
        q: 1
    },
    draw: function() {
        console.log('draw');
    }
};
cricle.draw(); // we calling a draw method of circle object here.


////////////////////////////////////////
/////////factory function/////////////// // in this function we use camel notation.
////////////////////////////////////////


function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}
const circle1 = createCircle(1);
console.log(circle1);



// Another pattern for creating an object
/////////////////////////////////
///////constructor funtion/////// // job of this function is to create an object. and we use pascal notation in this function.
/////////////////////////////////


function Circle() {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
};
const Circle = new circle1(1);


///////////////////////////////////
//////dynamic nature of object/////
///////////////////////////////////


const object = { // as u see i use const and i can easily add proerties in it. this is because we can change or delete properties of object by using const but we cannot reasign the value of an object. // object={}; //like this
    radius: 1
};

object.circle = 'yellow';
object.draw = function() {

}
delete object.ciecle;
delete object.draw; ///// wr can delete an object properties and method by delete keyword.


console.log(object);



///////////////////////////////
///////////refrence type///////
///////////////////////////////


let x = 10;
let y = x;
x = 20;
////// in this case the value of x is change to 20. but y is still stores 10.

let l = { value: 10 };
let m = x;
l = 20;
/////////// in this case value of l is value :20 and value of m is also the  same .

///////// the object is store in memory and the address of that memory stores in variable.

///////// the variable m and l is pointing same object that store in memory.

////primitive are copied by value.
//// object are copied by their refrences.



///// enumurating properties of an object//////////////////



function Circle() {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
};

for (let key in Circle) {
    console.log(key, Circle[key]); /////// get object properties by for in loop.
}



///////// object with for of///////////


/// we can access properties of an object by 
//object.keys
// object.entries
// if u want to check the properties are lies or not in object . you can use 'in' keyword 


/////cloning the object//////

function circle() {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
};

const another = Object.assign({}, circle); //// modern way to cloning an object 

// this will simply cloning circle properties to another object.



// simple way to cloning an object
const another2 = {...circle }; // spread operator


console.log(another);


///////////////////////////////////////
///////////string//////////////////////
///////////////////////////////////////

// we have two type of string in javascript


// primitive string

let message = 'hi';

//type of this message is string


// object string

const onther = new String('hi');
//type of this onther is object because we use builtin javascript function.


////////////////////////////////
//////////template littral/////
///////////////////////////////


//  `` this littral are used in javascript . the message ypu want to show on console you can add in this this will show you same as you write in a code.


const myself = `this is my 
message`;

//// print same as i write in a code.

// we use ${} we can write any piece of expression here it will print using littrel.


///////////////////////////////////////////////////////////////////////////////////////////
////////////////////////exercise//////////////////////////////
///////////////////////////////////////////////////////


let address = {


    street: 44,
    city: 'lahore',
    zipcode: 54048

};

function showAddress(address);
for (let key in address) {
    console.log(key, address[key]);
}

showAddress(address);

/////////////////////////////////////////////////


function showAddress(street, city, zipcode) {
    return {
        street,
        city,
        zipcode

    };
}

const addressw = showAddress('a', 'b', 'c');
console.log(address);



/////////////////

function ShowAddress(street, city, zipcode) {
    this.street = street;
    this.city = city;
    this.zipcode = this.zipcode;
}

const addressd = new ShowAddress('a', 'b', 'c');
console.log(address);