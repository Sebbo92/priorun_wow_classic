"use strict";

const express = require('express');
const app = express();
const helmet = require('helmet');
const PriorunController = require('./controllers/PriorunController');

app.use(helmet());
app.listen(3000)

app.get('/', function (req, res) {
    res.send(PriorunController.generateRandomId());
});

