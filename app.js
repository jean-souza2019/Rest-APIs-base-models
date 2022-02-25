const express = require('express');
const routes = require('./src/router');

const app = express();

app.use(express.json());

routes(app);

app.get('/', (_req, res) => {
    res.status(200).send({ message: 'Get Sucess from API' })
})

module.exports = app;
