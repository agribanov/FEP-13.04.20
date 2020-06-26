'use strict';
const URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users';
const DELETE_BTN_CLASS = 'delete-btn';

const listEl = document.getElementById('usersList');
const nameInputEl = document.getElementById('userName');
const phoneInputEl = document.getElementById('userPhone');
const addBtnEl = document.getElementById('addUserBtn');
const userTemplate = document.getElementById('userTemplate').innerHTML;

let list = [];

listEl.addEventListener('click', onListElClick);

init();

function onListElClick(e) {
    if (e.target.classList.contains(DELETE_BTN_CLASS)) {
        deleteItem(e.target.closest('.item').dataset.id);
    }
}

function init() {
    getList();
}

function getList() {
    fetch(URL)
        .then((res) => res.json())
        .then(setData)
        .then(renderList);
}

function setData(data) {
    return (list = data);
}

function renderList(data) {
    listEl.innerHTML = data.map(getItemElementHtml).join('');
}

function getItemElementHtml(item) {
    return userTemplate
        .replace('{{id}}', item.id)
        .replace('{{name}}', item.name)
        .replace('{{phone}}', item.phone);
}

function deleteItem(id) {
    fetch(`${URL}/${id}`, {
        method: 'DELETE',
    });

    list = list.filter((item) => item.id != id);

    renderList(list);
}
