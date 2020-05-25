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
