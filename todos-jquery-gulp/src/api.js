const TODOS_URL = 'http://5dd3d5ba8b5e080014dc4bfa.mockapi.io/todos';

const api = {
    getList: function () {
        return fetch(TODOS_URL).then(function (resp) {
            return resp.json();
        });
    },
    create: function (todo) {
        return fetch(TODOS_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(todo),
        }).then(function (resp) {
            return resp.json();
        });
    },
    update: function (todo) {
        return fetch(`${TODOS_URL}/${todo.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(todo),
        }).then(function (resp) {
            return resp.json();
        });
    },
    delete: function (id) {
        return fetch(`${TODOS_URL}/${id}`, {
            method: 'DELETE',
        });
    },
};
