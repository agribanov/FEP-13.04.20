// HTTP
// HTTPS
// FTP
// SFTP

// GET

// POST
// PUT

// DELETE

// HTTP Request
//     URL
//         protocol
//         domain (host, hostName)
//         path
//         queryParams
//     METHOD
//         GET, POST, PUT, DELETE
//     BODY
//         Data
//     HEADERS

// HTTP Response
//     Data
//     STATUS
//     Response

// DNS

// AJAX
// JSON

fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
    });
