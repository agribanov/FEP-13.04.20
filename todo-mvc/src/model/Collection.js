import ToDoModel from '../model/model';

export default class ToDoCollection {
    constructor(url) {
        this.url = url;
        this.list = [];

        this.setData = this.setData.bind(this);

        console.log('collection', url);
    }

    fetch() {
        console.log('fetching');
        return fetch(this.url)
            .then(response => response.json())
            .then(this.setData)
            .then(() => {
                const m = this.list[0];
                console.log(m, JSON.stringify(m));
            });
    }

    setData(list) {
        return (this.list = list.map(el => new ToDoModel(this.url, el)));
    }

    delete(id) {
        const model = this.get(id);
        return model
            .delete()
            .then(() => (this.list = this.list.filter(item => item !== model)));
        // console.log('collection delete', id, model);
    }

    get(id) {
        return this.list.find(item => item.id == id);
    }

    add(data) {
        data.completed = false;

        return fetch(`${this.url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => this.list.push(new ToDoModel(this.url, data)));
    }
}
