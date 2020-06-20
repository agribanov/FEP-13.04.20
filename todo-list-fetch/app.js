const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
const TASK_ITEM_CLASS = 'task-item';
const DELETE_BTN_CLASS = 'delete-btn';
const TASK_DONE_CLASS = 'done';

const addTaskForm = document.getElementById('addTaskForm');
const taskNameInput = document.getElementById('taskNameInput');
const taskList = document.getElementById('taskList');
const taskItemTemplate = document.getElementById('taskItemTemplate').innerHTML;
let todosList = [];

// addTaskForm.addEventListener('submit', onAddTaskFormSubmit);
taskList.addEventListener('click', onTaskListClick);

getData();

// function onAddTaskFormSubmit(event) {
//     event.preventDefault();

//     submitForm();
// }

function getData() {
    fetch(TODOS_URL)
        .then((res) => res.json())
        .then(setData);
}

function setData(data) {
    todosList = data;
    renderData(data);
}

function renderData(data) {
    data.forEach(addTask);
}

function onTaskListClick(event) {
    switch (true) {
        case event.target.classList.contains(TASK_ITEM_CLASS):
            toggleTaskState(event.target);
            break;
        case event.target.classList.contains(DELETE_BTN_CLASS):
            deleteTask(event.target.parentElement);
            break;
    }
}

// function submitForm() {
//     const task = { title: taskNameInput.value };

//     addTask(task);
//     resetForm();
// }

function addTask(task) {
    const html = taskItemTemplate
        .replace('{{id}}', task.id)
        .replace('{{title}}', task.title)
        .replace('{{doneClass}}', task.completed ? TASK_DONE_CLASS : '');

    const newTaskEl = htmlToElement(html);
    taskList.appendChild(newTaskEl);
}

// function resetForm() {
//     addTaskForm.reset();
// }

// function toggleTaskState(el) {
//     el.classList.toggle(TASK_DONE_CLASS);
// }

function deleteTask(el) {
    const taskId = el.dataset.taskId;
    console.log(taskId);

    todosList = todosList.filter((task) => task.id != taskId);

    el.remove();
}

function htmlToElement(html) {
    const template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
}
