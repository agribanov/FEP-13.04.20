let result = 0;

module.exports = {
    set: (value) => (result = value),
    add: (value) => (result += value),
    sub: (value) => (result -= value),
    mult: (value) => (result *= value),
    div: (value) => (result /= value),
};

// module.exports = function () {
//     return {
//         set: (value) => (result = value),
//         add: (value) => (result += value),
//         sub: (value) => (result -= value),
//         mult: (value) => (result *= value),
//         div: (value) => (result /= value),
//     };
// };
