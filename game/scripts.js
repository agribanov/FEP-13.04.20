const RIGHT_ARROW_KEY_CODE = 39;
const LEFT_ARROW_KEY_CODE = 37;
const UP_ARROW_KEY_CODE = 38;
const DOWN_ARROW_KEY_CODE = 40;
const SHAPE_BASE_CLASS = 'figure';
const MOVE_OFFSET = 10;

const colorInput = document.getElementById('elColor');
const shapeSelect = document.getElementById('elShape');
const shapeEl = document.getElementById('shape');

colorInput.addEventListener('change', onColorChange);
shapeSelect.addEventListener('change', onShapeChange);
document.addEventListener('keydown', onDocumentKeyDown);

init();

function init() {
    setPosition({ top: 100, left: 100 });
    setColor('black');
    setShape('square');
}

function onShapeChange() {
    setShape(shapeSelect.value);
}

function onDocumentKeyDown(e) {
    switch (e.keyCode) {
        case RIGHT_ARROW_KEY_CODE:
            moveTo(MOVE_OFFSET, 0);
            break;
        case LEFT_ARROW_KEY_CODE:
            moveTo(-MOVE_OFFSET, 0);
            break;
        case UP_ARROW_KEY_CODE:
            moveTo(0, -MOVE_OFFSET);
            break;
        case DOWN_ARROW_KEY_CODE:
            moveTo(0, MOVE_OFFSET);
            break;
    }
}

function onColorChange() {
    setColor(colorInput.value);
}

function moveTo(x, y) {
    setPosition({
        top: shapeEl.offsetTop + y,
        left: shapeEl.offsetLeft + x,
    });
}

function setPosition(pos) {
    shapeEl.style.top = pos.top + 'px';
    shapeEl.style.left = pos.left + 'px';
}

function setColor(color) {
    shapeEl.style.backgroundColor = color;
}

function setShape(shape) {
    shapeEl.className = SHAPE_BASE_CLASS + ' ' + shape;
}
