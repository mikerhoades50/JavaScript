let userInput = null;
do {
    userInput = prompt("Please enter an integer between 1 and 100:");
} while (
    userInput === null || 
    Number.isNaN(Number.parseFloat(userInput)) || 
    Number.parseFloat(userInput) < 1 ||
    Number.parseFloat(userInput) > 100
);

console.log("Thank you for entering a valid number:", userInput);       

