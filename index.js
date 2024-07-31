const express = require('express');
const app = express();
const port = 3000;

let requestCount = 0;
const status = "status 200";

app.use(express.static('public'));
app.use(express.json());

app.get('/count', (req, res) => {
    res.send({ requestCount });
});

app.get('/attack', (req, res) => {
    requestCount++;
    res.send({ requestCount });
});

app.get('/status', (req, res) => {
    res.send({ status });
});

app.post('/reset', (req, res) => {
    requestCount = 0;
    res.send({ message: 'Counter reset' });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
