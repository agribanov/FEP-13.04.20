const topPositionInput = document.getElementById('topPosition');
const leftPositionInput = document.getElementById('leftPosition');
const containerEl = document.getElementById('container');
const shapeTemplate = document.getElementById('shapeTemaplate').innerHTML;

document.getElementById('addBtn').addEventListener('click', onAddBtnClick);
containerEl.addEventListener('click', onContainerClick);

function onAddBtnClick() {
    // console.log(shapeTemaplateEl);

    containerEl.innerHTML += shapeTemplate
        .replace('{{top}}', topPositionInput.value)
        .replace('{{left}}', leftPositionInput.value);
}

function onContainerClick(e) {
    console.log('clicked on container', e.target);

    e.target.classList.toggle('hidden');
}
