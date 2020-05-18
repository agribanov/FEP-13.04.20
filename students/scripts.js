const students = [
    {
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7],
    },
    {
        name: 'John Doe',
        marks: [9, 8, 7, 6, 7],
    },
    {
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8],
    },
    {
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9],
    },
];

studentsAvarageMark(students);
groupAvarageMark(students);

function studentsAvarageMark(studentsList) {
    studentsList.forEach((student) => {
        const avgMark = arrayAvg(student.marks);

        console.log(student.name, avgMark);
    });
}

function groupAvarageMark(studentsList) {
    const allMarks = studentsList.map((student) => student.marks).flat();

    const avgMark = arrayAvg(allMarks);
    console.log(avgMark);
}

function arrayAvg(arr) {
    return arr.reduce((sum, mark) => sum + mark) / arr.length;
}
