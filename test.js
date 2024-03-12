 // Assigning values to variables
const x = 10;
const y = 20;
const z = 4;
// Checking the conditions to determine the order of variables
if (x > y && x > z) {
    if (y > z) {
        console.log(x + ", " + y + ", " + z);
    } else {
        console.log(x + ", " + z + ", " + y);
    }
} else if (y > x && y > z) {
    if (x > z) {
        console.log(y + ", " + x + ", " + z);
    } else {
        console.log(y + ", " + z + ", " + x);
    }
} else if (z > x && z > y) {
    if (x > y) {
        console.log(z + ", " + x + ", " + y);
    } else {
        console.log(z + ", " + y + ", " + x);
    }
} 
// Using a for loop to iterate through numbers from 0 to 15
// for (var x = 0; x <= 15; x++) {
//     // Checking if the current number is 0
//     if (x === 0) {
//         console.log(x + " is even");
//     }
//     // Checking if the current number is even
//     else if (x % 2 === 0) {
//         console.log(x + " is even");
//     }
//     // If the number is not 0 and not even, it is odd
//     else {
//         console.log(x + " is odd");
//     }
// } 
