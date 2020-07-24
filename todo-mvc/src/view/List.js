class ListView {
    constructor(config) {
        this.config = config; // {onDelete: () => {}}
        this.createElement();
    }

    createElement() {
        this.el = document.createElement('div');
        this.el.className = 'task-list u-full-width';

        this.el.addEventListener('click', this.onListClick.bind(this));
    }

    onListClick(e) {
        console.log(e, this);
        switch (true) {
            case e.target.classList.contains('delete-btn'):
                this.config.onDelete(e.target.parentNode.dataset.id);
                break;
            case e.target.classList.contains('task-item'):
                this.config.onToggle(e.target.dataset.id);
                break;
        }
    }

    render(data) {
        this.el.innerHTML = data.map(this.renderItem).join('\n');
    }

    renderItem(item) {
        const isDoneClass = item.completed ? 'done' : '';
        return `<div class="task-item u-full-width ${isDoneClass}" data-id="${item.id}">
                    ${item.title}
                    <span class='delete-btn'>x</span>
                </div>`;
    }
}
