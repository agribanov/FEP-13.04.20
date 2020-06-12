function Accordeon(el, config) {
    this.container = el;
    this.config = config;

    this.init();
}

Accordeon.ACCORDEON_ELEMENT_CLASS = 'accordeon-element';
Accordeon.ACCORDEON_HEADING_CLASS = 'accordeon-heading';
Accordeon.ACCORDEON_BODY_CLASS = 'accordeon-body';
Accordeon.OPEN_CLASS = 'open';

Accordeon.prototype.init = function () {
    this.initClasses();
    this.bindEventListener();
};

Accordeon.prototype.initClasses = function () {
    Array.prototype.forEach.call(this.container.children, (el) =>
        el.classList.add(Accordeon.ACCORDEON_ELEMENT_CLASS)
    );

    Array.prototype.forEach.call(
        this.container.querySelectorAll('.title'),
        (el) => el.classList.add(Accordeon.ACCORDEON_HEADING_CLASS)
    );

    Array.prototype.forEach.call(
        this.container.querySelectorAll('.body'),
        (el) => el.classList.add(Accordeon.ACCORDEON_BODY_CLASS)
    );
};

Accordeon.prototype.bindEventListener = function () {
    this.container.addEventListener('click', (e) => this.onContainerClick(e));
};

Accordeon.prototype.onContainerClick = function (e) {
    if (e.target.classList.contains(Accordeon.ACCORDEON_HEADING_CLASS)) {
        this.toggleElement(e.target.parentNode);
    }
};

Accordeon.prototype.toggleElement = function (el) {
    if (el.classList.contains(Accordeon.OPEN_CLASS)) {
        this.closeElement(el);
    } else {
        this.openElement(el);
    }
};

Accordeon.prototype.closeElement = function (el) {
    el.classList.remove(Accordeon.OPEN_CLASS);
};

Accordeon.prototype.closeAllElements = function () {
    Array.prototype.forEach.call(this.container.children, this.closeElement);
};

Accordeon.prototype.openElement = function (el) {
    if (this.config.collapseOther) {
        this.closeAllElements();
    }

    el.classList.add(Accordeon.OPEN_CLASS);
};

Accordeon.prototype.open = function (index) {
    this.openElement(this.container.children[index]);
};

Accordeon.prototype.close = function (index) {
    this.closeElement(this.container.children[index]);
};

Accordeon.prototype.toggle = function (index) {
    this.toggleElement(this.container.children[index]);
};
