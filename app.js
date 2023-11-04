const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Set up routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/home.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/about.html');
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/public/contact.html');
});

// 404 page
app.use((req, res) => {
    res.status(404).sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
