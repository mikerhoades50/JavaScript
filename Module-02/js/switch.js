// Generate a random integer from 0 to 4 (inclusive)
const randomNumber = Math.floor(Math.random() * 5);

console.log("Random number generated:", randomNumber);

// === VERSION 1: Using if-else statements ===
console.log("Using if-else:");

if (randomNumber === 0) {
    console.log("zero");
} else if (randomNumber === 1) {
    console.log("one");
} else if (randomNumber === 2) {
    console.log("two");
} else if (randomNumber === 3) {
    console.log("three");
} else if (randomNumber === 4) {
    console.log("four");
} else {
    console.log("Something went wrong (number out of range)");
}


// === VERSION 2: Using switch statement ===
console.log("Using switch:");

switch (randomNumber) {
    case 0:
        console.log("zero");
        break;
    case 1:
        console.log("one");
        break;
    case 2:
        console.log("two");
        break;
    case 3:
        console.log("three");
        break;
    case 4:
        console.log("four");
        break;
    default:
        console.log("Something went wrong (number out of range)");
        break;
}


// === VERSION 3: Using dictionary ===

let dict = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four"
}

console.log("Using dictionary:");
console.log(dict[randomNumber]);