function createCalculator(baseValue) {
    return {
        sum: (value) => (baseValue += value),
        sub: (value) => (baseValue -= value),
        div: (value) => (baseValue /= value),
        mult: (value) => (baseValue *= value),
        set: (value) => (baseValue = value),
        get: () => baseValue,
    };
}

const calc = createCalculator(5);

console.log(calc.sum(10)); /// 15
console.log(calc.mult(10)); // 150
console.log(calc.sub(40)); // 110
console.log(calc.div(10)); // 11
console.log(calc.set(100)); //
console.log(calc.get()); //

const template = createTemplate('Hello, {{name}} {{surname}}!');

console.log(template({ name: 'Alex', surname: 'Smith' })); // Hello, Alex!

function createTemplate(templateString) {
    return (obj) =>
        Object.keys(obj).reduce(
            (template, key) => template.replace(`{{${key}}}`, obj[key]),
            templateString
        );
}

template({ name: 'Bob' });
