/*const prompt= require("prompt-sync")();
let a = prompt("Hy whats your age");
a = Number.parseInt(a);
// console.log(typeof a);
if(a<0){
    console.log("This is not a valid number")
}else if(a>0 && a<10){
    console.log("you are a child")
}else if(a>10 && a<20){
    console.log("you are an adolescence")
}else{
    console.log("your age is"+ a)
}*/

const prompt= require("prompt-sync")();
let a = prompt("Hy whats your age");
a = Number.parseInt(a);
switch (true) {
  case a>0 && a<10:
    console.log("You are a child")
    break;
  case a>10:
    console.log("you are an adolescence")
    break;
  case a>20:
     console.log("you are young")
    break;
  default:
    console.log("This is default value")
}
// use of turnary operator
// let a = 50
// console.log(a=50 ? "pass": "fail")
// Write a program for write sum of natural numbers
// const prompt = require("prompt-sync")();
let sum = 0;
let n = prompt("Enter the natural number")
n = Number.parseInt(n)
for(let i=0; i<n; i++){
    sum += (i+i);
    console.log((i+1), "+")
}
console.log("The sum of first"+ n +"natural numbers is"+ sum)

// forin loop is used to print keys of object
/*let obj = {
    ahsan: 99,
    khurram:50,
    awais: 60,
    dawood: 70,
    mohsin:80
}
for (let a in obj){
    console.log("Marks of "+ a +" are "+ obj[a])
}*/

// for of loop
for(let b of "ahsan"){
    console.log(b)
}
const promt = require("prompt-sync")();
let age = promt("Enter your age");
age= Number.parseInt(age);
if(age>10 && age<20){
    console.log("age lies between 10 and 20")
}else{
    console.log("not")
}

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    console.log("Today is " + day)
    break;
  case 1:
    day = "Monday";
    console.log("Today is " + day)
    break;
  case 2:
     day = "Tuesday";
     console.log("Today is " + day)
    break;
  case 3:
    day = "Wednesday";
    console.log("Today is " + day)
    break;
  case 4:
    day = "Thursday";
    console.log("Today is " + day)
    break;
  case 5:
    day = "Friday";
    console.log("Today is " + day)
    break;
  case 6:
    day = "Saturday";
    console.log("Today is " + day)
    break;
    default:
      console.log("NOT A VALID DAY")
  
  }
