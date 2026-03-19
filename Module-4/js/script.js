// print all the li elements to the console

let liList = document.querySelectorAll("li");

for (let i=0; i< liList.length; i++){
    console.log(liList[i].innerText);
}

///console log the first word of the second paragraph

    let para = document.querySelectorAll("p")
    let pText = para[1].innerText;
    let splitText2 = pText.split(' ');
    console.log (splitText2[0]);


///// Console log the number of paragraphs on the page

let pList = document.querySelectorAll("p");
console.log(pList.length);