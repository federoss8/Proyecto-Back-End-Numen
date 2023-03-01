const express = require('express');
const routes = require('../server/routes/routes');
const app = express();

app.use(express.json());
app.use('/api', routes);

module.exports = app;