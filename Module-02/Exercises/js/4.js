let userInput = null;
let max = 100;
let min = 1;
let match = false;
let counter = 1;
let guess = 0;

let logInfo = function (min, max, guess) {
    console.log("My guess is " + guess + ". The remaining interval is " +
        min + " to " + max + ".");
}


userInput = prompt("Please enter an integer between 1 and 100 keep it a secret from me and I will guess it");

do {
    let guessNumber = Math.floor((max + min) / 2);
    guess = prompt("Is your number Less than, Greater than, or Equal to " 
        + Math.floor((max + min) / 2) + "?");
    if (guess === "Equal to") {
        match = true;
        console.log("I guessed the number " + guessNumber + " in " + counter + " tries.");
    } else if (guess === "Less than") {
        max = Math.floor((max + min) / 2);
        logInfo(min, max, guessNumber);
        counter++;
    } else if (guess === "Greater than") {
        min = Math.floor((max + min) / 2);
        logInfo(min, max, guessNumber);
        counter++;
    } else {
        prompt("Please enter 'Less than', 'Greater than', or 'Equal to'.");
        //counter++;
    }


} while (!match && counter <= 10);

if (counter > 9) {
    console.log("I think you forgot your number, or couldn't follow simple rules, please refresh the page to try again.");
}





