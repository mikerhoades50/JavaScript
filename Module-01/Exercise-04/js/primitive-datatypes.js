console.log(5,typeof 5);
console.log(5.2, typeof 5.2);
console.log("Hello World", typeof "Hello World");
console.log(true, typeof true);
console.log(false, typeof false);
console.log(null, typeof null);
console.log(undefined, typeof undefined);

let x = Symbol();
console.log(x, typeof x);

let y = Symbol.for('something');
console.log(y, typeof y);

function myFunction(a,b=72) {
    return a *b;
}

let owner = {
    firstName: 'Mike',
    lastName: 'Rhoades',
    age: 27
};



owner.age += 1;

let shoppingList = [
  'beer',
  'vodka',
  'whiskey'
];

owner.shoppingList = shoppingList;

owner.shoppingList[1] = 'burbon';