///////////////////////////////////////
////////////function///////////////////
///////////////////////////////////////

// performing a task //

function greet(name, lastName) {
    console.log('hello' + name + '' + lastName);
}
greet(musadiq, zahid);


// after declare a function the value of variable in pranthesis in know as parameter.
// after call a variable of function the value of variable in paranthesis in known as argument .
// this will print ''hello musadiq zahid''  .
// the plus operator concatenate the value of string and value.


// calculating a value

function square(number) {
    number * number;
}
console.log(square(2));

// we  can calculate the value of number by peroforming a function.


////////////////////////////////////////////////
//////////////declartion of function////////////
////////////////////////////////////////////////

run(); // calling a function before declaration of function is known as hosting
function run() {
    console.log('run');

}


///another way to declare function
// function expression

let run = function() {

    console.log('run');
};
run();


/////////////////////////////////////////////////
////////////////////Getter///////////////////////// to access properties of an object.
/////////////////////////////////////////////////

const numb = {

    name: musa,
    last: zahis,
    get function() {
        return `${numb.name} ${numb.last}`
    }
};




///////////////////////////////////////////////
//////////////Setter///////////////////////////
///////////////////////////////////////////////

const nusb = {

    name: musa,
    last: zahis,
    get fullName() {
        return `${nusb.name} ${nusb.last}`
    },
    set fullName(value) {
        const parts = value.split(' ')
        this.name = parts[0];
        this.last = parts[1];

    }
};
nusb.fullName = 'zahod musadiq'
console.log(numb);