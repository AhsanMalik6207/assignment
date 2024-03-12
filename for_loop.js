// write a program for sum of natural number
// const prompt= require ("prompt-sync")();
// let num= prompt("Enter the natural number")
// let sum=0;
// num = Number.parseInt(num);
// for(let i=0; i<num; i++){
//     sum +=(i+1);
//     // console.log((i+1))
// }
// console.log("The sum of first"+num+"natural number is"+ sum)

// forin loop is used to print keys of object
// let obj={
//     ahssan: 99,
//     khurram:70,
//     awais:89,
//     dawood:70,
//     mohsin:86
// }
// for(let a in obj){
//     console.log("Marks of "+ a + " are "+obj[a])
// }
// for of loop
// for(let b of "obj"){
//   console.log(b)
// }
// while loop
const prompt= require ("prompt-sync")();
let num= prompt("Enter the natural number");
num= Number.parseInt(num);
let i=10;
do{
    console.log("the numbers are "+ i);
    i++;
}while(i<num)