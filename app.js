const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html' );
});

app.use('/', (req, res) => {
    res.status(404);
    res.send('Not Found: 404');
});

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});