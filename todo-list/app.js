const TASK_ITEM_CLASS = 'task-item';
const DELETE_BTN_CLASS = 'delete-btn';
const TASK_DONE_CLASS = 'done';

const addTaskForm = document.getElementById('addTaskForm');
const taskNameInput = document.getElementById('taskNameInput');
const taskList = document.getElementById('taskList');
const taskItemTemplate = document.getElementById('taskItemTemplate').innerHTML;

addTaskForm.addEventListener('submit', onAddTaskFormSubmit);
taskList.addEventListener('click', onTaskListClick);

addTask({ title: 'Hello world!' });

function onAddTaskFormSubmit(event) {
    event.preventDefault();

    submitForm();
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

function submitForm() {
    const task = { title: taskNameInput.value };

    addTask(task);
    resetForm();
}

function addTask(task) {
    const html = taskItemTemplate.replace('{{title}}', task.title);

    // taskList.innerHTML += html;
    // taskList.insertAdjacentHTML('beforeend', html);

    const newTaskEl = htmlToElement(html);
    taskList.appendChild(newTaskEl);
}

function resetForm() {
    addTaskForm.reset();
}

function toggleTaskState(el) {
    el.classList.toggle(TASK_DONE_CLASS);
}

function deleteTask(el) {
    el.remove();
}

function htmlToElement(html) {
    const template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
}
