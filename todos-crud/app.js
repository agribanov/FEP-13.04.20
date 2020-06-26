const TODOS_URL = 'http://5dd3d5ba8b5e080014dc4bfa.mockapi.io/todos';
const TODO_ITEM_CLASS = 'task-item';
const DELETE_BTN_CLASS = 'delete-btn';

const addTaskForm = document.getElementById('addTaskForm');
const taskNameInput = document.getElementById('taskNameInput');
const taskList = document.getElementById('taskList');
const taskItemTemplate = document.getElementById('taskItemTemplate').innerHTML;

let todos = [];
addTaskForm.addEventListener('submit', onAddTaskFormSubmit);
taskList.addEventListener('click', onTaskListClick);

init();

function onTaskListClick(e) {
    switch (true) {
        case e.target.classList.contains(TODO_ITEM_CLASS):
            toggleTodo(e.target.dataset.id);
            break;
        case e.target.classList.contains(DELETE_BTN_CLASS):
            deleteTodo(e.target.parentNode.dataset.id);
            break;
    }
}

function onAddTaskFormSubmit(event) {
    event.preventDefault();

    submitForm();
}

function init() {
    getTodos();
}

function getTodos() {
    return fetch(TODOS_URL)
        .then((resp) => resp.json())
        .then(setTodos)
        .then(renderTodos);
}

function setTodos(data) {
    return (todos = data);
}

function renderTodos(data) {
    taskList.innerHTML = data.map(generateTodoHtml).join('\n');
}

function generateTodoHtml(todo) {
    return taskItemTemplate
        .replace('{{id}}', todo.id)
        .replace('{{title}}', todo.title)
        .replace('{{completeClass}}', todo.isDone ? 'done' : '');
}

function toggleTodo(id) {
    const todo = todos.find((todo) => todo.id === id);

    todo.isDone = !todo.isDone;

    fetch(`${TODOS_URL}/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
    });

    renderTodos(todos);
}

function deleteTodo(id) {
    fetch(`${TODOS_URL}/${id}`, {
        method: 'DELETE',
    });

    todos = todos.filter((todo) => todo.id !== id);

    renderTodos(todos);
}

function submitForm() {
    const todo = { title: taskNameInput.value, isDone: false };

    fetch(TODOS_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
    })
        .then((resp) => resp.json())
        .then(addTodo);
}

function addTodo(todo) {
    todos.push(todo);

    renderTodos(todos);
}
