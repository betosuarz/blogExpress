const express = require('express');
const dayjs = require('dayjs');

const app = express();
app.use(express.json());

app.use((req, res, next) => {
    console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'));
    next();
});

app.use('/api', require('./routes/api'));


module.exports = app;