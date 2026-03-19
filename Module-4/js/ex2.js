/////// using js-second-section class, console log the second and fourth list items in the second section, separated by a hyphen


let list2 = document.querySelectorAll(".js-second-section li");
console.log(list2[1].innerText + ' - ' + list2[3].innerText);


/////// not using the js-second-section class, console log the second and fourth list items in the second section, separated by a hyphen


let list4 = document.querySelectorAll("section");
let list5 = list4[1];
let list6 = list5.innerText.split('\n');
console.log(list6[2] + ' - ' + list6[4]);


////using the .js-second-section-title class, console log the second and fourth list items in the second section, separated by a hyphen


const selectedListItems = document.querySelectorAll(
    '.js-second-section-title ~ .js-item-list > li:nth-child(2n)'
);

for (let item of selectedListItems) {
    console.log(item.innerText);
}