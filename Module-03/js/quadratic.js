
//AI generated code for solving quadratic equations
/*function quadratic(a, b, c) {
    let discriminant = b**2 - 4*a*c;   

    if (discriminant > 0) {
        let root1 = (-b + Math.sqrt(discriminant)) / (2*a);
        let root2 = (-b - Math.sqrt(discriminant)) / (2*a);
        console.log("The roots are real and distinct: " + root1 + " and " + root2);
    } else if (discriminant === 0) {
        let root = -b / (2*a);
        console.log("The roots are real and equal: " + root);
    } else {
        console.log("The roots are complex and conjugate.");
    }
}
*/
function getCoefficient(name) {
    let value = null;
    do {
        let str = prompt(`Please enter the coefficient ${name}:`);
        value = Number.parseFloat(str);
    } while (
        value === null || 
        Number.isNaN(value)
    );
    return value;
}

function getCoefficients() {
    let a=getCoefficient('a');
    let b=getCoefficient('b');
    let c=getCoefficient('c');
    return [a, b, c];
}

function getDiscriminant(a, b, c) {
    return b**2 - 4*a*c;
}

function printQuadraticSolutions(a, b, c) {
    let discriminant = getDiscriminant(a, b, c);
    let root1 = (-b + Math.sqrt(discriminant)) / (2*a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2*a);
    console.log("The roots are real and distinct: " + root1 + " and " + root2);
}

function printSingleSolutions(a, b) {
    console.log("The roots are real and equal: " + (-b / (2*a)));
}

function printComplexSolutions() {
    console.log("The roots are complex and conjugate.");
}

function quadratic() {
    let [a, b, c] = getCoefficients();
    let discriminant = getDiscriminant(a, b, c);
    if (discriminant > 0) {
        printQuadraticSolutions(a,b,c);
    } else if (discriminant === 0) {
        printSingleSolutions(a, b);
    }else {
        printComplexSolutions();
    }
} 