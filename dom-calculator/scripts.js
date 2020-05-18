const argumentAInput = document.getElementById('argumentA');
const argumentBInput = document.getElementById('argumentB');
const actionSelect = document.getElementById('action');
const calculateBtn = document.getElementById('calculateBtn');

const resultEl = document.getElementById('result');
const errorEl = document.getElementById('error');

calculateBtn.addEventListener('click', onCalculateBtnClick);

function onCalculateBtnClick() {
    hideContainers();

    if (isValid(argumentAInput.value) && isValid(argumentBInput.value)) {
        const result = calculate(
            +argumentAInput.value,
            +argumentBInput.value,
            actionSelect.value
        );

        showResult(result);
    } else {
        showError();
    }
}

function hideContainers() {
    resultEl.classList.add('hidden');
    errorEl.classList.add('hidden');
}

function isValid(value) {
    return !!value;
}

function showResult(result) {
    resultEl.textContent = 'Result: ' + result;

    resultEl.classList.remove('hidden');
}

function showError() {
    errorEl.classList.remove('hidden');
}

function calculate(a, b, action) {
    switch (action) {
        case 'add':
            return a + b;
        case 'sub':
            return a - b;
        case 'div':
            return a / b;
        case 'mult':
            return a * b;
        case 'min':
            return Math.min(a, b);
        case 'max':
            return Math.max(a, b);
    }
}
