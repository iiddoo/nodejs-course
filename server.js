const express = require('express');

const app = express();


// express middleware
app.use((req, res, next) => {
    const now = new Date().toString();
    console.log(`${now}: ${req.method} ${req.url}`);
    next();
});

// maintenance middleware
/* app.use((req, res, next) => {
    res.send('<h2>In your service<h2>');
}); */

// return text/html
app.get('/', (req, res) => {
    res.send('<h1>Splendid :)<h1>');
});

// return json
app.get('/user', (req, res) => {
    res.send({
        name: 'ido',
        age: 39
    });
});


app.listen(3000);

// for testing
module.exports.app = app;