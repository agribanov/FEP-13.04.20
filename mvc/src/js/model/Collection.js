class Collection {
    constructor(url) {
        this.url = url;
        this.list = [];
    }

    fetch() {
        return fetch(this.url)
            .then((resp) => resp.json())
            .then(this.setData.bind(this));
    }

    setData(data) {
        return (this.list = data.map((item) => {
            const model = new Model(this.url);
            model.setData(item);

            return model;
        }));
    }

    delete(id) {
        const model = this.list.find((item) => item.data.id === id);

        model.delete().then(() => {
            this.list = this.list.filter((item) => item !== model);
        });
    }
}
