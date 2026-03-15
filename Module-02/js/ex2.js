// ask the user to enter a number and print its parity (even or odd)
let input = prompt("Enter a Name:");
let userName = input;
//if (userName === null || userName.length === 0) {
//    console.log("Please enter a valid name.");
//}



if (userName === null) {
    console.log("Please don't cancel me :-)");
}else if (userName.length === 0) {
    console.log("Please enter a valid name.");
}else if (userName.length >= 8) {
    console.log(userName + " The name is long.");
} else {
    console.log(userName + " The name is short.");
}



