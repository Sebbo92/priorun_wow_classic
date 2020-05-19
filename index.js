const express = require('express');
const app = express();
const routes = require('./routes/routes');
const helmet = require('helmet');



app.use('/', routes);
app.use(helmet());



app.listen(3000)