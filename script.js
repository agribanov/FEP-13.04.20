// const boxEl = document.getElementById('box');
// const colorInput = document.getElementById('boxColor');

// document.addEventListener('mousemove', onDocumentClick);
// document.addEventListener('keydown', onDocumentKeyDown);
// colorInput.addEventListener('change', onInputKeyDown);

// function onDocumentClick(e) {
//     // console.log('clicked', e);

//     if (e.altKey) {
//         boxEl.style.left = e.x - 50 + 'px';
//         boxEl.style.top = e.y - 50 + 'px';
//     }
// }

// function onDocumentKeyDown(e) {
//     let color;

//     switch (e.code) {
//         case 'KeyR':
//             color = 'red';
//             break;
//         case 'KeyG':
//             color = 'green';
//             break;
//         case 'KeyB':
//             color = 'blue';
//             break;
//         default:
//             color = 'black';
//     }

//     boxEl.style.backgroundColor = color;
// }

// function onInputKeyDown(e) {
//     console.log(e, colorInput.value);

//     boxEl.style.backgroundColor = colorInput.value;
// }

document.addEventListener('click', (e) => {
    console.log('document click');
});

document.body.addEventListener('click', () => console.log('body click'));

// document.getElementById('container').addEventListener('click', (e) => {
//     e.preventDefault();

//     console.log('container click');
// });
// document
//     .getElementById('box')
//     .addEventListener('click', () => console.log('box click'));

document.getElementById('link').addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e);
});
