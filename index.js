const express = require('express')
const app = express()

app.get('/', function (req, res) {
    const minId = 1000;
    const maxId = 9999;
    res.send('PrioRun:' + (generateRandomId(minId, maxId)));
})

function generateRandomId(minId, maxId) {
    return Math.floor(minId + Math.random() * maxId);
}

app.listen(3000)