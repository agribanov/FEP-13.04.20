const taskInput = document.getElementById('task');
const addBtn = document.getElementById('addTaskBtn');
const listEl = document.getElementById('list');

addBtn.addEventListener('click', onAddBtnClick);

function onAddBtnClick() {
    addNewTask(taskInput.value);

    clearInput();
}

function addNewTask(title) {
    const li = document.createElement('li');

    li.textContent = title;

    listEl.append(li);
}

function clearInput() {
    taskInput.value = '';
}
