console.log("hello world - JavaScript");

//The spread operator (...) in JavaScript is used to unpack elements 
// from an array, object, or iterable into another array, object, or function call.

const a = [1,2,3];
const b = [...a,3];

console.log(b);


// In JavaScript, an object is a collection of key-value pairs. 
// It can hold multiple values of different data types — 
// like strings, numbers, arrays, functions, or even other objects.

const car = {
    name : "audi",
    model : "2024"
}
//console.log(car.name)

// In JavaScript, the this keyword refers to the context in which a function is called — 
// it's dynamic and depends on how the function is invoked.

let person = {
    name : "junaid",
    func() {
        console.log(`hello ${this.name} : object`)
    }
}
person.func();

// Closures -"Inner functions can access variables of outer functions 
// even after the outer function has returned."

const init = () => {
    const name = "junaid";

    const displayName = () => {
        console.log(name);
    }
    displayName();
}
init();

// JavaScript Currying

// Currying is the process of transforming a function with multiple 
// arguments into a series of functions that each take a single argument.

function add(a) {
    return function (b){
        return function(c){
            return a + b + c;
        }
    }
}
//add((a)(b)(c));

// Higher Order function - that take arguments function argument (callbacks)

const func = function(num,callback){
    console.log("After this function : callback function will called");

    return callback(num);
}

const double = function(num){
    return num + num;
}

let fun = function(){
    console.log("In the func 1");
}

let func2 = function(func){
    console.log("In the func 2");

    fun();
}

func2(func);

console.log(func(5,double));


let arr = [1,2,3,4,5];

const square = arr.map((num) => num * num);

const square1 = arr.filter((num) => num % 2 == 0);

const square2 = arr.reduce((acc,curr) => acc+curr+0);

//console.log(Math.floor(Math.random() * 100 + 1));

setTimeout(function(){
    //console.log("Hello World!");
},1000);

// Promisification

let checkEven = new Promise((resolve,reject) => {
    let number = 4;

    if(number % 2 == 0){
        resolve("number is even");
    }
    else{
        reject("number is odd");
    }
});

checkEven
    .then(message => {
       //console.log("success: ",message);
    })
    .catch(error => {
        //console.log("error",error);
    });
           
 // Promise

const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/todos");
    const data = await response.json();

    //console.log(data);
}

fetchData();

