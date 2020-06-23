USER_URL = 'https://jsonplaceholder.typicode.com/users';

fetch(USER_URL)
    .then((res) => res.json())
    .then((data) => console.log(data));

let thirdUser;
fetch(USER_URL + '/' + 3)
    .then((res) => res.json())
    .then((data) => (thirdUser = data));
// .then(updateUser);

const user = {
    name: 'Alex',
    surname: 'Smith',
};

fetch(USER_URL + '/' + 3, {
    method: 'DELETE',
});

// fetch(USER_URL, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(user),
// })
//     .then((res) => res.json())
//     .then((data) => console.log(data));

// function updateUser() {
//     thirdUser.name = 'Alex';

//     fetch(USER_URL + '/' + 3, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(thirdUser),
//     })
//         .then((res) => res.json())
//         .then((data) => console.log(data));
// }
