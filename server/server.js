const express = require('express');

var app = express();

app.get('/', (request, response) => {
    response.status(404).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    });
    // response.status(200).send('Hello World');
});

app.get('/users', (request, response) => {
    user1 = {
        name: 'name1',
        age: 1
    }

    user2 = {
        name: 'name2',
        age: 2
    }

    users  = [user1, user2]
    response.status(200).send(users);
});

app.listen(3000);

module.exports.app = app;