console.log("Exercise a: Print numbers from 0 to 9");
for(let i = 0; i < 10; i++) {
    console.log(i);
}


console.log("Exercise b: Print numbers from 1 to 10");
for(let i = 1; i < 11; i++) {
    console.log(i);
}


console.log("Exercise c: Print numbers from 9 to 0");
for(let i = 9; i >= 0; i--) {
    console.log(i);
}

console.log("Exercise c: Print numbers from 10 to 1");
for(let i = 10; i > 0; i--) {
    console.log(i);
}


console.log("Exercise b: Print even numbers from 1 to 25, and the word 'odd' for odd numbers");
for(let i = 1; i < 26; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }else {
        console.log("odd");
    }
}