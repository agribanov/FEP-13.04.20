const a = +prompt('A');

// const a = '';

if (a === 23) {
    alert('A == 23');
} else if (a === 20) {
    alert('A=20');
} else if (a === 0) {
    alert('A=0');
} else {
    alert('I dont know');
}

alert(a > 23 ? 'A > 23' : a == 23 ? 'A =23 ' : 'A<23');

switch (a) {
    case 23:
    case 20:
        alert('A = 20 or A = 23');
        break;
    case 0:
        alert('A = 0');
        break;
    default:
        alert('I dont know');
}
