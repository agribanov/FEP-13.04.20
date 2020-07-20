class Model {
    constructor(url) {
        this.baseUrl = url;
        this.data = {};
    }

    setData(data) {
        this.data = data;
    }

    delete() {
        return fetch(this.baseUrl + '/' + this.data.id, {
            method: 'DELETE',
        });
    }
}
