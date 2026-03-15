// ask the user to enter a number and print its parity (even or odd)
let input = prompt("Enter an integer:");
let number=Number.parseInt(input);

if (Number.isNaN(number)){
    console.log("Please enter a valid integer.");
} else if (number % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}

if (number >=3) {
    console.log("The number is greater than or equal to 3.");
}