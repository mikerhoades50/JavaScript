let list = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday'
];

for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
}
for (let i in list) {
    console.log("- " + list[i]);
}
for (let day of list) {
    console.log("* " + day);
}

let x = 0;
while( x< list.length) {
    console.log(list[x].toUpperCase());
    x++;
}
