let userInput = null;
do {
    userInput = prompt("Please enter a number greater than 10:");
} while (
    userInput === null || 
    Number.isNaN(Number.parseFloat(userInput)) || 
    Number.parseFloat(userInput) <= 10
);

console.log("Thank you for entering a valid number:", userInput);       

