fetch('https://jsonplaceholder.typicode.com/users', { method: 'GET' }).then(data => data.json()).then(result => console.log(result)).catch(error => console.error(error))