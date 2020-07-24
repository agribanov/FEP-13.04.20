class Controller {
    constructor() {
        this.collection = new ToDoCollection(contactsUrl);
        this.listView = new ListView({
            onDelete: (id) => {
                this.collection.delete(id).then(() => this.renderData());
            },
            onToggle: (id) => {
                this.collection
                    .get(id)
                    .toggle()
                    .then(() => this.renderData());
            },
        });
        this.formView = new FormView({
            onSave: (data) => {
                this.collection.add(data).then(() => this.renderData());
            },
        });

        this.container = document.getElementById('root');

        this.container.append(this.listView.el);
        this.container.append(this.formView.el);

        this.refreshData();
    }

    refreshData() {
        this.collection.fetch().then(() => this.renderData());
    }

    renderData() {
        this.listView.render(this.collection.list);
        console.log(this.collection.list);
    }
}
