// const arr = [1, 2, 3, 5, 7, 30];

// const arr10 = arr.map((item, index) => {
//     if (index > 2) {
//         return item * 10;
//     } else {
//         return item;
//     }
// });

// const arrFiltered = arr.filter((item) => item > 5);

// // 1
// // 2
// // 3
// // 5
// // 7
// // 10

// // num = 5

// const arrFiltered = arr.filter((item) => item > 100); // [5]
// // num = arrFiltered[0]

// const num = arr.find((item) => item > 100);
// // const index = arr.findIndex((item) => item > 100);

// const index = arr.indexOf(5);

// arr.forEach((item) => console.log(item));

// const sum = arr.reduce((acc, item) => acc + item);

// const person = {
//     name: 'Alex',
//     adress: {
//         city: 'Dnipro',
//     },
//     run: function () {
//         console.log('running');
//     },
// };

// person['name'];

// let str = 'Alex';
// str[1] = 'B';

// let obj = new String(str);

// console.log(str[1]);

let a = 2;

function fn(b) {
    if (a > 10)
        let c = 3;
    
    
    console.log(a);
    console.log(c);
}

fn();
console.log(c);




const students = [
    {
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7 ]
    },
    {
        name: 'John Doe',
        marks: [ 9, 8, 7, 6, 7 ]
    },
    {
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8 ]
    },
    {
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9 ]
    }
]

studentAverageMarks()

// Alex Gribanov => 17 / 4
// John Smith => 17 / 4

groupAverageMark()
// Средняя оwенка => 