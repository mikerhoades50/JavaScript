let userInput = null;
let max = 100;
let min = 1;
let match = false;
let counter = 1;
let guess = 0;

let logInfo = function(min, max, guess) {   
            console.log("My guess is " + guess + ". The remaining interval is " +
            min + " to " + max + ".");
}

do {
    userInput = prompt("Please enter an integer between 1 and 100:");
} while (
    userInput === null ||
    Number.isNaN(Number.parseFloat(userInput)) ||
    Number.parseFloat(userInput) < 1 ||
    Number.parseFloat(userInput) > 100
);




do {
    guess = Math.floor((max + min) / 2);
    if (Number.parseInt(userInput) === guess) {
        match = true;
        console.log("I guessed the number " + guess + " in " + counter + " tries.");
    } else if (Number.parseInt(userInput) < guess) {
        max = Math.floor((max + min) / 2);
        logInfo(min, max, guess);
        counter++;
    } else {
        min = Math.floor((max + min) / 2);
        logInfo(min, max, guess);
        counter++;
    }


} while (!match && counter <= 10);





