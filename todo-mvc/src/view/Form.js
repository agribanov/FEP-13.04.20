export default class FormView {
    constructor(config) {
        this.config = config;

        this.createElement();
        this.el.addEventListener('submit', this.onSubmit.bind(this));
        this.titleInput = this.el.querySelector('#taskNameInput');
    }

    onSubmit(e) {
        e.preventDefault();
        this.config.onSave({
            title: this.titleInput.value
        });
    }

    createElement() {
        this.el = document.createElement('form');
        this.el.innerHTML = `
            <div class="row">
                <div class="ten columns">
                    <input type="text" name="title" id="taskNameInput" class="u-full-width">
                </div>
                <div class="two columns">
                    <input type="submit" class="u-full-width" value="Add">
                </div>
            </div>
        `;
    }
}
