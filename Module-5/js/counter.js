let counterValue = 0;

function renderCounter() {
    let container = document.querySelector('.js-container');
    container.innerHTML = counterValue;    
}

renderCounter();

const button = document.querySelector('.js-button-2up');
button.addEventListener('click', function() {
    counterValue+=2;
    renderCounter();
});

const buttonReset = document.querySelector('.js-button-reset');
buttonReset.addEventListener('click', function() {
    counterValue = 0;
    renderCounter();
});