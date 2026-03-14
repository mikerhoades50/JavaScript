let number1 = 5;
console.log(number1, typeof number1);
let number2 = 5.2;
console.log(number2, typeof number2);
let string1 = "Hello World";
console.log(string1, typeof string1);
let boolean1 = true;
console.log(boolean1, typeof boolean1);
let boolean2 = false;
console.log(boolean2, typeof boolean2);
let nullValue = null;
console.log(nullValue, typeof nullValue);
let undefinedValue = undefined;
console.log(undefinedValue, typeof undefinedValue);
let bigNum = 123456789012345678901234567890n;
console.log(bigNum, typeof bigNum);

let x = Symbol();
console.log(x, typeof x);

let y = Symbol.for('something');
console.log(y, typeof y);

function myFunction(a, b = 72) {
    return a * b;
}
console.log(myFunction, typeof myFunction);

let hotelBooking = {
    personStaying: ['Mike Rhoades', 'Jane Doe'],
    roomNumber: 27,
    priceUSCents: 10001, // $100.01 use this because of the precision issues with floating point numbers in JavaScript eg. 0.1 + 0.2 !== 0.3
    checkinDate: new Date('2026-03-14'),
    checkoutDate: new Date('2026-03-17')
};

console.log(hotelBooking, typeof hotelBooking);


let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
console.log(daysOfWeek, typeof daysOfWeek, Array.isArray(daysOfWeek));


let cardsMap = new Map(
    [
        ['Ace', 11],
        ['King', 10],
        ['Queen', 10],
        ['Jack', 10],
        ['10', 10],
        ['9', 9],
        ['8', 8],
        ['7', 7],
        ['6', 6],
        ['5', 5],
        ['4', 4],
        ['3', 3],
        ['2', 2]
    ]
);
console.log(cardsMap, typeof cardsMap);
console.log(`
    ${number1} ${typeof number1}
    ${number2} ${typeof number2}
    ${string1} ${typeof string1}
    ${boolean1} ${typeof boolean1}
    ${boolean2} ${typeof boolean2}
    ${nullValue} ${typeof nullValue}
    ${undefinedValue} ${typeof undefinedValue}
    ${bigNum} ${typeof bigNum}
    ${x.toString()} ${typeof x} 
    ${y.toString()} ${typeof y}
    ${myFunction} ${typeof myFunction}
    ${hotelBooking} ${typeof hotelBooking}
    ${daysOfWeek} ${typeof daysOfWeek} ${Array.isArray(daysOfWeek)}
    ${cardsMap} ${typeof cardsMap}`
);