function createrCounter(counts) {
    return {
        count: function () {
            return ++counts;
        },
    };
}

const counter = createrCounter(0);
const counter10 = createrCounter(10);

console.log(counter.count());
console.log(counter.count());

console.log(counter10.count());
console.log(counter10.count());

counter10 = null;

// ДЗ
const calc = createCalculator(34);

calc.sum(2345); /// 15
calc.mult(10); // 150
calc.sub(40); // 110
calc.div(10); // 11
calc.set(100); //
