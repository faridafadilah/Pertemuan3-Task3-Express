const express = require('express'); // Module Express
const app = express(); 
const port = 3000; //Port Server

// Url /
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // Menampilkan FIle index.html
});
// Url /About
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html' ); // Menampilkan File about.html
});
// Url selain diatas
app.use('/', (req, res) => {
    res.status(404);
    res.send('Not Found: 404');
});

// Membuat Server
app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});