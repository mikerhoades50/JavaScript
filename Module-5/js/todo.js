const form = document.querySelector('form');
const nameField = document.querySelector('[name="task"]');
const dueDateField = document.querySelector('[name="dueDate"]');
const todoList = [];
const errorContainer = document.querySelector('.js-error-container');

function formSubmit(event) {
    event.preventDefault();

    const name = nameField.value;
    const dueDate = dueDateField.value;

    if (name.length === 0 || dueDate.length === 0) {
        errorContainer.textContent = 'Please fill in both fields';
        return;
    }
 
 
    todoList.push({
        name: nameField.value,
        dueDate: dueDateField.value
    });
    nameField.value = '';
    dueDateField.value = '';
    
    renderTodoList();
}

function renderTodoList() {
    let container = document.querySelector('.js-container');
    container.innerHTML = '';
    errorContainer.textContent = '';

    todoList.forEach((todo, index) => {
        const todoItem = document.createElement('div');
        todoItem.innerHTML = `
            <h3>${todo.name}</h3>
            <p>Due Date: ${todo.dueDate}</p>
        `;
        container.appendChild(todoItem);
    });
}

form.addEventListener('submit', formSubmit);