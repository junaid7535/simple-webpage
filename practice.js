console.log("hello world - JavaScript");

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

console.log(square);
console.log(square1);
console.log(square2);

let fact = 1;
let num = 5;

for(let i = 1; i <= num; i++){
    fact *= i;
}

console.log(Math.floor(Math.random() * 100 + 1));

setTimeout(function(){
    console.log("Hello World!");
},1000);

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
        console.log("success: ",message);
    })
    .catch(error => {
        console.log("error",error);
    });
           

