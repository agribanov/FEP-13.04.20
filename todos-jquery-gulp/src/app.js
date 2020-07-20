$(() => {
    console.log('Hello world');
    const TODO_ITEM_CLASS = 'task-item';
    const DELETE_BTN_CLASS = 'delete-btn';
    const $addTaskForm = $('#addTaskForm');
    const $taskNameInput = $('#taskNameInput');
    const $taskList = $('#taskList');
    const taskItemTemplate = $('#taskItemTemplate').html();

    let todos = [];
    $addTaskForm.on('submit', onAddTaskFormSubmit);
    $taskList.on('click', '.' + TODO_ITEM_CLASS, onTaskToggleClick);
    $taskList.on('click', '.' + DELETE_BTN_CLASS, onTaskDeleteClick);

    init();

    function onTaskToggleClick(e) {
        const todoId = $(e.target).data('id');
        toggleTodo(todoId);
    }

    function onTaskDeleteClick(e) {
        e.stopPropagation();
        const todoId = $(e.target).parent().data('id');
        deleteTodo(todoId);
    }

    function onAddTaskFormSubmit(event) {
        event.preventDefault();

        submitForm();
    }

    function init() {
        getTodos();
    }

    function getTodos() {
        return api.getList().then(setTodos).then(renderTodos);
    }

    function setTodos(data) {
        return (todos = data);
    }

    function renderTodos(data) {
        $taskList.empty().append(data.map(generateTodoHtml).join('\n'));
        // $(data.map(generateTodoHtml).join('\n')).appendTo($taskList);
        // $taskList.html(data.map(generateTodoHtml).join('\n'));
    }

    function generateTodoHtml(todo) {
        return taskItemTemplate
            .replace('{{id}}', todo.id)
            .replace('{{title}}', todo.title)
            .replace('{{completeClass}}', todo.isDone ? 'done' : '');
    }

    function toggleTodo(id) {
        const todo = todos.find((todo) => todo.id == id);

        todo.isDone = !todo.isDone;

        api.update(todo);

        renderTodos(todos);
    }

    function deleteTodo(id) {
        api.delete(id);

        todos = todos.filter((todo) => todo.id != id);

        renderTodos(todos);
    }

    function submitForm() {
        const todo = { title: $taskNameInput.val(), isDone: false };
        $taskNameInput.val('');

        api.create(todo).then(addTodo);
    }

    function addTodo(todo) {
        todos.push(todo);

        renderTodos(todos);
    }
});
