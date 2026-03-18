//////////Ex 1////////////
function fibonacci(n) {
    if (n === 0) {
        return n;
    }
    let fibNum = [0, 1];
    for (let i = 1; i < n; i++) {
        fibNum[i + 1] = fibNum[i - 1] + fibNum[i];
    }
    return fibNum[n - 1];
}

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(8));
console.log(fibonacci(9));
console.log(fibonacci(10));

//simpier recursive method **** But Starts at 1 and NOT 0//
function fib(n){
    if (n===0) return 0;
    if (n===1) return 1;
    return fib(n-1) + fib(n-2);
}

console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(9));
console.log(fib(10));







//////////////Ex 2///////////////



let myArray = [1, 2, 3, 4, 5, 6, 7, 8];

function addOne(fArray) {
    let clone = [ ...fArray ];
    for (let x = 0; x < clone.length; x++){
        clone[x] = clone[x]+1;
    };
    console.log(clone)
}

addOne(myArray);
console.log(myArray);





//////////////////Ex 3///////////////////////////



let ulArray = ['one','two','three'];

function makeULHtml(ulHtml) {
    let clone = [ ...ulHtml ];
    let ulString = "<ul> ";
    for (let x = 0; x < clone.length; x++){
        ulString = ulString + "<li> " + clone[x] + "</li> ";
    };
    return ulString;
}



console.log(makeULHtml(ulArray));

//wired to an HTML Page:
let container = document.querySelector('.ul-container');
container.innerHTML = makeULHtml(ulArray);







//////////////////////Ex 4//////////////////

let matrix = [
    [1, 2, 3,'a'],
    [4, 5, 6,'b'],
    [7, 8, 9,'c'],
    ['d','e','f','g']
];

function makeHtmlTable(tableArray){
    let tString = "<table> <tbody> ";
    for (let x = 0; x < tableArray.length; x++){
        tString = tString+"<tr> "
        for (let y = 0; y<tableArray[x].length;y++){
            tString = tString + "<td>"+tableArray[x][y]+"</td> ";
        }
        tString = tString + "</tr> ";
    };
    tString = tString + "</tbody> </table>";
    return tString;

}
console.log(makeHtmlTable(matrix));

let tcontainer = document.querySelector('.table-container');
tcontainer.innerHTML = makeHtmlTable(matrix);