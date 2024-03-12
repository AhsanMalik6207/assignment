//Write a JavaScript program that computes the average marks of the following students. Then, this average is used to determine the corresponding grade.
// Array of students with their names and grades
const students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];
const Avgmarks = 0;
// Loop through the students array to calculate the total marks
for (let i = 0; i < students.length; i++) {
    Avgmarks += students[i][1];
    let avg = (Avgmarks / students.length);
}
// Calculate and log the average grade
console.log("Average grade: " + (Avgmarks) / students.length);

// Determine the grade based on the average
if (avg < 60) {
    console.log("Grade: F");
} else if (avg < 70) {
    console.log("Grade: D");
} else if (avg < 80) {
    console.log("Grade: C");
} else if (avg < 90) {
    console.log("Grade: B");
} else if (avg <= 100) {
    console.log("Grade: A");
} 
//Q:2 Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". For numbers multiples of both three and five print "FizzBuzz".
// Loop through numbers from 1 to 100
// for (var i = 1; i <= 100; i++) {
    // Check if the number is divisible by both 3 and 5
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i + " FizzBuzz");
//     }
//     // Check if the number is divisible by 3
//     else if (i % 3 === 0) {
//         console.log(i + " Fizz");
//     }
//     // Check if the number is divisible by 5
//     else if (i % 5 === 0) {
//         console.log(i + " Buzz");
//     }
//     // If none of the above conditions are met, print the number
//     else {
//         console.log(i);
//     }
// } 
//Q:3 
// Variables to control loop counters and character output
// var x, y, chr;

// Outer loop for rows
// for (x = 1; x <= 6; x++) {
//     // Inner loop for characters in each row
//     for (y = 1; y < x; y++) {
//         // Accumulate asterisks in the 'chr' variable
//         chr = chr + ("*");
//     }

//     // Print the accumulated characters for the current row
//     console.log(chr);

//     // Reset 'chr' for the next row
//     chr = '';
// } 

//Q NO.1
let marks = {
    ahsan:99,
    sara:80,
    mohsin:30,
    dawood:50
    
}
for(let i=0; i<Object.keys(marks).length; i++){
    console.log("The marks of "+Object.keys(marks)[i]+" are " +marks[Object.keys(marks)[i]])
}
//for in loop
for(let key in marks){
    console.log("The marks of "+key+" are " +marks[key])
}
// correct number
const prompt=require("prompt-sync")();
let cn=4;
let i;
while(i !=cn){
    console.log("Try again");
    i=prompt("Enter correct num");
}
console.log("You have entered a correct num")