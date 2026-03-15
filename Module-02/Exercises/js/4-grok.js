let userInput = null;
let min = 1;
let max = 100;
let counter = 0;
let match = false;

// ── Get secret number (with validation) ────────────────────────────────
while (userInput === null) {
    userInput = prompt("Please enter an integer between 1 and 100\n(keep it secret — I'll try to guess it!)");

    if (userInput === null) {
        alert("Game cancelled.");
        throw new Error("Cancelled"); // or just return/break depending on context
    }

    let num = Number(userInput.trim());
    if (Number.isNaN(num) || num < 1 || num > 100 || !Number.isInteger(num)) {
        alert("Please enter a whole number between 1 and 100.");
        userInput = null;
    } else {
        userInput = num; // store clean number (not actually used later — just validated)
    }
}

// ── Guessing loop ──────────────────────────────────────────────────────
function logInfo(min, max, guess) {
    console.log(`My guess is ${guess}.  Remaining range: ${min}–${max}`);
}

while (!match && counter < 10) {
    counter++;
    let guess = Math.floor((min + max) / 2);
    logInfo(min, max, guess);

    let response = prompt(
        `Is your number ${guess}?\n\n` +
        `Answer with one of:\n` +
        `  equal / yes / correct\n` +
        `  lower / less / small / too high\n` +
        `  higher / greater / big / too low`
    )?.trim().toLowerCase();

    if (response === null) {
        console.log("Game cancelled.");
        break;
    }

    if (["equal", "yes", "correct", "y", "ye", "got it"].includes(response)) {
        match = true;
        console.log(`Yes! I guessed it — the number is ${guess} (in ${counter} ${counter === 1 ? "try" : "tries"})`);
    }
    else if (["lower", "less", "small", "too high", "high", "smaller", "l", "h"].some(w => response.includes(w))) {
        max = guess - 1;
    }
    else if (["higher", "greater", "big", "too low", "low", "bigger", "g"].some(w => response.includes(w))) {
        min = guess + 1;
    }
    else {
        console.log("Sorry, I didn't understand. Please say something like: yes / lower / higher");
        counter--; // don't count bad answers against the 10-try limit
    }

    // Safety net
    if (min > max) {
        console.log("Hmm… the range collapsed. Did you give inconsistent answers? Game over.");
        break;
    }
}

if (!match && counter >= 10) {
    console.log("Reached 10 tries — either your number is very hard, or maybe the answers got mixed up. Refresh to play again!");
}